import { FaCheck } from "react-icons/fa";

import { BUTTON_CLASS } from "../../../../constants/classNames";

import Button from "../../../../_components/Button";

import { useSelectReview } from "@/app/store/use-select-review";

import { useEffect } from "react";

type ReviewSelectAllCheckBoxProps = {
  ids: string[];
};

export default function ReviewSelectAllCheckBox({
  ids,
}: ReviewSelectAllCheckBoxProps) {
  const { isSelectedAll, setTotalLength, toggleSelectAll } = useSelectReview();

  const onClick = () => {
    toggleSelectAll(ids);
  };

  useEffect(() => {
    setTotalLength(ids.length);
  }, [ids.length]);

  return (
    <td>
      <Button
        type="button"
        icon={<FaCheck />}
        onClick={onClick}
        className={BUTTON_CLASS.SELECT_ALL}
        active={isSelectedAll}
      />
    </td>
  );
}
