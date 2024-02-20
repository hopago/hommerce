import { MdArrowLeft } from "react-icons/md";

type PrevPageProps = {
  onPrevPage: () => void;
  disabled: boolean;
};

export default function PrevPage({ onPrevPage, disabled }: PrevPageProps) {
  return (
    <button
      type="button"
      className="reviews-pagination__arrow-btn left"
      onClick={onPrevPage}
      disabled={disabled}
    >
      <MdArrowLeft className="icon" />
    </button>
  );
}
