import { ReactElement } from "react";

import Button from "../(dashboard)/(home)/_components/Button";

type ExecuteButtonProps = {
  type: "button" | "submit";
  text?: string;
  onClick?: () => void | (() => Promise<void>);
  icon?: string | ReactElement<any, any>;
  width?: number;
  height?: number;
  disabled?: boolean;
  display?: "none" | "flex" | "block" | "inline-block";
  className?: "manage" | string;
};

export default function ExecuteButton({
  onClick,
  text,
  icon,
  type,
}: ExecuteButtonProps) {
  return <Button type={type} icon={icon} text={text} onClick={onClick} />;
}
