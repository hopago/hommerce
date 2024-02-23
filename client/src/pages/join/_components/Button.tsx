type ButtonProps = {
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
  disabled: boolean;
  className: string;
};

export default function Button({
  text,
  type,
  onClick,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
}
