import { FormEvent, RefObject, useState } from "react";

import { useToggle } from "./use-controlled-toggle";

import { useUserPointLogMutation } from "../management/[username]/services/use-user-point-log-mutation";

import { toast } from "sonner";

export const useMutatePointLogModal = <T extends HTMLElement>(
  ref: RefObject<T>,
  id: string,
  amount: number,
  desc: string
) => {
  const { show, setShow } = useToggle(ref);

  const { mutate, isPending } = useUserPointLogMutation();

  const [localAmount, setLocalAmount] = useState(amount);
  const [localDesc, setLocalDesc] = useState(desc);

  const setAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalAmount(e.target.valueAsNumber);
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

    const payload: { id: string; amount?: number; desc?: string } = {
      id,
      amount: localAmount,
      desc: localDesc,
    };
    if (localAmount !== undefined) payload.amount = amount;
    if (localDesc !== undefined) payload.desc = desc;

    mutate(payload);
  };

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
