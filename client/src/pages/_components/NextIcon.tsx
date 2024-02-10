import { RiArrowRightSLine } from "react-icons/ri";

type NextIconProps = {
  handleNext: () => void;
  nextDisabled?: boolean;
};

export default function NextIcon({ handleNext, nextDisabled }: NextIconProps) {
  return (
    <button
      className="right"
      onClick={handleNext}
      aria-label="다음 슬라이드"
      role="button"
      disabled={nextDisabled}
    >
      <span>
        <RiArrowRightSLine />
      </span>
    </button>
  );
}
