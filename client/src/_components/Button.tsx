import { useAuth } from "@clerk/clerk-react";

import { cn } from "../lib/utils";

type ButtonProps = {
  type: "button" | "submit";
  isAuth?: boolean;
  size: "sm" | "md" | "lg";
  text?: string;
  icon?: string | JSX.Element;
  onClick: any;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  type,
  isAuth,
  size,
  text,
  icon,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  const { isSignedIn } = useAuth();

  if (!text && !icon) throw new Error("Text or Icon required.");

  const handleClick = () => {
    onClick();

    if (isAuth && !isSignedIn) {
      // TODO: Show Navigate Modal
    }
  };

  return (
    <button
      type={type}
      className={cn(className ? className : "", size && `btn ${size}`)}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className="horizontal">
        {icon && (
          <div className="img-wrap">
            {typeof icon === "string" ? (
              <img src={icon} alt="button-icon" />
            ) : (
              icon
            )}
          </div>
        )}
        {text && <span>{text}</span>}
      </div>
    </button>
  );
}
