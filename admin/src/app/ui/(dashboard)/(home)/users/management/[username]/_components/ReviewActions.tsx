import { useState } from "react";

import styles from "./review-log-list.module.css";

import { MdMoreVert } from "react-icons/md";

import Button from "../../../../_components/Button";

import { useRouter } from "next/navigation";

import { REVIEW_ACTION_BUTTON } from "../../../../constants/classNames";

type ActionType = "상세 보기" | "리뷰 삭제";

type ReviewActionsProps = {
  id: string;
};

export default function ReviewActions({ id }: ReviewActionsProps) {
  const [show, setShow] = useState(false);

  const toggleClick = () => {
    setShow((prev) => !prev);
  };

  const reviewActions: ActionType[] = ["상세 보기", "리뷰 삭제"];

  const renderButton = (action: ActionType) =>
    action === "상세 보기" ? <Navigate id={id} /> : <Delete />;

  return (
    <td className={styles.reviewActions}>
      <MdMoreVert onClick={toggleClick} />
      {show && reviewActions.map((action) => renderButton(action))}
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

function Delete() {
  const onClick = () => {};

  return (
    <Button
      type="button"
      text="리뷰 삭제"
      onClick={onClick}
      ariaLabel="리뷰 삭제"
      className={REVIEW_ACTION_BUTTON}
    />
  );
}
