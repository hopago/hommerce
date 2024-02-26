import { cn } from "../../../lib/utils";

type ButtonProps = {
  className: string;
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  className,
  text,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn("login-button", className && className)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
