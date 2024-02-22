import { forwardRef } from "react";

type InputTypeProps = {
  type: "text" | "password";
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = forwardRef<HTMLInputElement | null, InputTypeProps>(
  ({ type, placeholder, onChange, value }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  }
);

export default Input;
