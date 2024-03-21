import { FaSpinner } from "react-icons/fa";

export default function GlobalLoadingLayout() {
  return (
    <div className="global-loading">
      <FaSpinner size={27} className="spinner-icon" />
    </div>
  );
}
