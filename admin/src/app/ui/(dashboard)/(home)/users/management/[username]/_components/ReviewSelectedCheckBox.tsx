import { FaCheck } from "react-icons/fa";

import { SELECT_ALL_BUTTON } from "../../../../constants/classNames";

import Button from "../../../../_components/Button";

type ReviewSelectCheckBoxProps = {
  id: string;
};

export default function ReviewSelectCheckBox({
  id,
}: ReviewSelectCheckBoxProps) {
  const onClick = () => {};

  return (
    <td>
      <Button
        type="button"
        icon={<FaCheck />}
        onClick={onClick}
        className={SELECT_ALL_BUTTON}
      />
    </td>
  );
}
