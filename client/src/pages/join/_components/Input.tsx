type InputProps = {
  type: "password" | "text" | "email";
  name: "email" | "username" | "lastName" | "firstName" | "password" | "verificationCode";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | (() => void);
  className?: string;
  validMatch?: "false" | "true";
  onFocus?: () => void;
  onBlur?: () => void;
};

export default function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  validMatch,
  className,
  onFocus,
  onBlur,
}: InputProps) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      aria-invalid={validMatch ? "false" : "true"}
      aria-describedby="confirmnote"
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
