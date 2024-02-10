import { RiArrowLeftSLine } from "react-icons/ri";

type PrevIconProps = {
  handlePrev: () => void;
  prevDisabled?: boolean;
};

export default function PrevIcon({ handlePrev, prevDisabled }: PrevIconProps) {  
  return (
    <button
      className="left"
      onClick={handlePrev}
      aria-label="이전 슬라이드"
      role="button"
      disabled={prevDisabled}
    >
      <span>
        <RiArrowLeftSLine />
      </span>
    </button>
  );
}
