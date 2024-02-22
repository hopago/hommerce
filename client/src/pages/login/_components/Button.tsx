import { cn } from "../../../lib/utils";

type ButtonProps = {
  className: string;
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  className,
  text,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn("login-button", className && className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
