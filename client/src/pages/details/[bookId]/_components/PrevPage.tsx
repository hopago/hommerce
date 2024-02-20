import { MdArrowLeft } from "react-icons/md";

import { cn } from "../../../../lib/utils";

type PrevPageProps = {
  onPrevPage: () => void;
  disabled: boolean;
};

export default function PrevPage({ onPrevPage, disabled }: PrevPageProps) {
  return (
    <button
      type="button"
      className={cn(
        "reviews-pagination__arrow-btn left",
        disabled && "disabled"
      )}
      onClick={onPrevPage}
      disabled={disabled}
    >
      <MdArrowLeft className="icon" />
    </button>
  );
}
