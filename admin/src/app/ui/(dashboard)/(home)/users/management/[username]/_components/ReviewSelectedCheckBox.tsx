import { FaCheck } from "react-icons/fa";

import { BUTTON_CLASS } from "../../../../constants/classNames";

import Button from "../../../../_components/Button";

import { useSelectReview } from "@/app/store/use-select-review";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

import styles from "./review-log-list.module.css";

type ReviewSelectCheckBoxProps = {
  id: string;
};

export default function ReviewSelectCheckBox({
  id,
}: ReviewSelectCheckBoxProps) {
  const { ids, toggleId } = useSelectReview();

  const onClick = () => {
    toggleId(id);
  };

  const isActive = ids?.includes(id);

  return (
    <td>
      <Button
        type="button"
        icon={<FaCheck />}
        onClick={onClick}
        className={BUTTON_CLASS.SELECT_ALL}
        active={isActive}
      />
    </td>
  );
}

export const ReviewSelectCheckBoxSkeleton = () => {
  return (
    <td>
      <Skeleton className={cn("skeleton", styles.tdButtonSkeleton)} />
    </td>
  );
};
