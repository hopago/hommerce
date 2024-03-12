import { FaCheck } from "react-icons/fa";

import { SELECT_ALL_BUTTON } from "../../../../constants/classNames";

import Button from "../../../../_components/Button";

import { useSelectReview } from "@/app/store/use-select-review";

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
        className={SELECT_ALL_BUTTON}
        active={isActive}
      />
    </td>
  );
}
