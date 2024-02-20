import { MdArrowLeft } from "react-icons/md";

type NextPageProps = {
  onNextPage: () => void;
  disabled: boolean;
};

export default function NextPage({ onNextPage, disabled }: NextPageProps) {
  return (
    <button
      type="button"
      className="reviews-pagination__arrow-btn left"
      onClick={onNextPage}
      disabled={disabled}
    >
      <MdArrowLeft className="icon" />
    </button>
  );
}
