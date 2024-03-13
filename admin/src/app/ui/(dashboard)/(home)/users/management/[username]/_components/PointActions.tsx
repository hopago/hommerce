import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
} from "react";

import styles from "./point-log-table.module.css";

import { MdClose, MdMoreVert } from "react-icons/md";

import { Navigate } from "./ReviewActions";
import Button from "../../../../_components/Button";

import { REVIEW_ACTION_BUTTON } from "../../../../constants/classNames";

import { useToggle } from "../../../hooks/use-toggle";
import { useMutatePointLogModal } from "../../../hooks/use-mutate-point-log-modal";

type PointActionsProps = {
  id: string;
  desc: string;
  amount: number;
};

type UpdateModalProps = {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  isPending: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  addAmount: () => void;
  decreaseAmount: () => void;
  setDesc: (e: ChangeEvent<HTMLInputElement>) => void;
  localAmount: number;
  localDesc: string;
  id: string;
  amount?: number;
  desc?: string;
};

export default function PointActions({ id, amount, desc }: PointActionsProps) {
  const containerRef = useRef<HTMLTableDataCellElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const { show, toggleClick } = useToggle(containerRef);
  const {
    show: modalShow,
    setShow: setModalShow,
    isPending,
    onSubmit,
    addAmount,
    decreaseAmount,
    setDesc,
    localAmount,
    localDesc,
  } = useMutatePointLogModal(modalRef, id, amount, desc);

  return (
    <td className={styles.reviewActions} ref={containerRef}>
      {!show ? (
        <MdMoreVert
          onClick={toggleClick}
          className={styles.moreVert}
          size={21}
        />
      ) : (
        <MdClose onClick={toggleClick} className={styles.close} />
      )}
      {show && (
        <div className={styles.reviewActionsButtons}>
          <Navigate id={id} path="point" text="상세보기" />
          <Button
            type="button"
            text="포인트 수정"
            onClick={() => setModalShow(true)}
          />
        </div>
      )}
      {modalShow && (
        <Update
          setModalShow={setModalShow}
          isPending={isPending}
          onSubmit={onSubmit}
          addAmount={addAmount}
          decreaseAmount={decreaseAmount}
          setDesc={setDesc}
          localAmount={localAmount}
          localDesc={localDesc}
          id={id}
          amount={amount}
          desc={desc}
        />
      )}
    </td>
  );
}

function Update({
  setModalShow,
  isPending,
  onSubmit,
  addAmount,
  decreaseAmount,
  setDesc,
  localAmount,
  localDesc,
  id,
  amount,
  desc,
}: UpdateModalProps) {
  return (
    <Button
      type="submit"
      text="수정하기"
      ariaLabel="수정하기"
      className={REVIEW_ACTION_BUTTON}
      backgroundColor="#01B8FC"
      disabled={isPending}
    />
  );
}
