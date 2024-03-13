import { FormEvent, RefObject, useEffect, useState } from "react";

import { useToggle } from "./use-controlled-toggle";

import { useUserPointLogMutation } from "../management/[username]/services/use-user-point-log-mutation";

import { toast } from "sonner";

export const useMutatePointLogModal = <T extends HTMLElement>(
  ref: RefObject<T>,
  pointId: string,
  userId: string,
  amount: number,
  desc: string
) => {
  const { show, setShow } = useToggle(ref);

  const { mutate, isPending, isSuccess } = useUserPointLogMutation();

  const [localAmount, setLocalAmount] = useState(amount);
  const [localDesc, setLocalDesc] = useState(desc);

  const setAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalAmount(Number(e.target.value));
  };

  const setDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalDesc(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amount === localAmount && localDesc === desc) {
      toast.message("변경 사항이 없습니다. 필드를 확인해주세요.");
      return;
    }

    if (!localAmount && !localDesc) {
      toast.message("포인트 증감량 혹은 설명란을 채워주세요.");
      return;
    }

    const payload: { pointId: string; amount?: number; desc?: string; userId: string; } = {
      pointId,
      userId,
      amount: localAmount,
      desc: localDesc,
    };
    if (!isNaN(localAmount) && localAmount !== null) {
      payload.amount = localAmount;
    }
    if (localDesc.trim() === "") payload.desc = desc;

    mutate(payload);
  };

  useEffect(() => {
    if (isSuccess) {
      setShow(false);
    }
  }, [isSuccess]);

  return {
    show,
    setShow,
    isPending,
    onSubmit,
    setAmount,
    setDesc,
    localAmount,
    localDesc,
  };
};
