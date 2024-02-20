import { MdArrowRight } from "react-icons/md";

import { cn } from "../../../../lib/utils";

type NextPageProps = {
  onNextPage: () => void;
  disabled: boolean;
};

export default function NextPage({ onNextPage, disabled }: NextPageProps) {
  return (
    <button
      type="button"
      className={cn(
        "reviews-pagination__arrow-btn right",
        disabled && "disabled"
      )}
      onClick={onNextPage}
      disabled={disabled}
    >
      <MdArrowRight className="icon" />
    </button>
  );
}
