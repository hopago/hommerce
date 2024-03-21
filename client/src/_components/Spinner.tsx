import { FaSpinner } from "react-icons/fa";

type SpinnerProps = {
  text?: string;
};

export default function Spinner({ text }: SpinnerProps) {
  return (
    <div className="spinner-container">
      <FaSpinner className="spinner-icon" />
      {text && <span>{text}</span>}
    </div>
  );
}
