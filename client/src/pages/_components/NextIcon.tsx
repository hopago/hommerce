import { RiArrowRightSLine } from "react-icons/ri";

type NextIconProps = {
  handleNext: () => void;
};

export default function NextIcon({ handleNext }: NextIconProps) {
  return (
    <button
      className="right"
      onClick={handleNext}
      aria-label="다음 슬라이드"
      role="button"
    >
      <span>
        <RiArrowRightSLine />
      </span>
    </button>
  );
}
