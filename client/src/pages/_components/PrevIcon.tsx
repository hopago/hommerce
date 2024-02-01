import { RiArrowLeftSLine } from "react-icons/ri";

type PrevIconProps = {
  handlePrev: () => void;
};

export default function PrevIcon({ handlePrev }: PrevIconProps) {
  return (
    <button
      className="left"
      onClick={handlePrev}
      aria-label="이전 슬라이드"
      role="button"
    >
      <span>
        <RiArrowLeftSLine />
      </span>
    </button>
  );
}
