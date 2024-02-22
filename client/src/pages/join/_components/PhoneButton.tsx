type PhoneButtonProps = {
  type: "button";
  text: string;
  img: string;
  onClick: () => void;
};

export default function PhoneButton({
  type,
  text,
  img,
  onClick,
}: PhoneButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      <span className="img-wrap">
        <img src={img} alt="phone-icon" />
      </span>
      <span>{text}</span>
    </button>
  );
}
