import Button from "../../../_components/Button";

import vert from "../../../assets/ico_vert.png";
import vertGray from "../../../assets/ico_vert_gray.png";
import horizon from "../../../assets/ico_horizon.png";
import horizonGray from "../../../assets/ico_horizon_gray.png";

import { UIType } from "../hooks/use-select-ui";

type SwitchButtonsProps = {
  onClick: (display: UIType) => void;
  display: UIType;
};

export default function SwitchButtons({
  onClick,
  display,
}: SwitchButtonsProps) {
  const onVerticalClick = () => {
    onClick("flex");
  };

  const onHorizontalClick = () => {
    onClick("grid");
  };

  return (
    <div className="switch-buttons">
      <Button
        className="vertical"
        type="button"
        size="sm"
        onClick={onVerticalClick}
        icon={display === "flex" ? vert : vertGray}
      />
      <Button
        className="horizontal"
        type="button"
        size="sm"
        onClick={onHorizontalClick}
        icon={display === "grid" ? horizon : horizonGray}
      />
    </div>
  );
}
