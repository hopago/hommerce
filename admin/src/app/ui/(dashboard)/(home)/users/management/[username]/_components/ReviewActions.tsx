import { useRef, useState } from "react";

import styles from "./review-log-list.module.css";

import { MdClose, MdMoreVert } from "react-icons/md";

import Button from "../../../../_components/Button";

import { useRouter } from "next/navigation";

import { REVIEW_ACTION_BUTTON } from "../../../../constants/classNames";

import { useOutsideClick } from "../../../hooks/use-outside-click";

type ReviewActionsProps = {
  id: string;
};

export default function ReviewActions({ id }: ReviewActionsProps) {
  const containerRef = useRef<HTMLTableDataCellElement>(null);

  const [show, setShow] = useState(false);

  const toggleClick = () => {
    setShow((prev) => !prev);
  };

  useOutsideClick<HTMLTableDataCellElement>({ ref: containerRef, setShow });

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
          <Navigate id={id} />
          <Delete id={id} />
        </div>
      )}
    </td>
  );
}

function Navigate({ id }: { id: string }) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/review/${id}`);
  };

  return (
    <Button
      type="button"
      text="상세 보기"
      onClick={onClick}
      ariaLabel="상세 보기"
      className={REVIEW_ACTION_BUTTON}
    />
  );
}

function Delete({ id }: { id: string }) {
  const onClick = () => {};

  return (
    <Button
      type="button"
      text="리뷰 삭제"
      onClick={onClick}
      ariaLabel="리뷰 삭제"
      className={REVIEW_ACTION_BUTTON}
      backgroundColor="#BF444A"
    />
  );
}
