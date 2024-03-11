import { FaCheck } from "react-icons/fa";

import { SELECT_ALL_BUTTON } from "../../../../constants/classNames";

import Button from "../../../../_components/Button";

type ReviewSelectAllCheckBoxProps = {
  ids: string[];
};

export default function ReviewSelectAllCheckBox({
  ids,
}: ReviewSelectAllCheckBoxProps) {
  const toggleSelectAll = () => {};

  return (
    <td>
      <Button
        type="button"
        icon={<FaCheck />}
        onClick={toggleSelectAll}
        className={SELECT_ALL_BUTTON}
      />
    </td>
  );
}
