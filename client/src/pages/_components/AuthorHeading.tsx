import { MdAdd } from "react-icons/md";

import NextIcon from "./NextIcon";
import PrevIcon from "./PrevIcon";

type AuthorHeadingProps = {
  prevDisabled: boolean;
  nextDisabled: boolean;
  handlePrev: () => void;
  handleNext: () => void;
};

export default function AuthorHeading({
  prevDisabled,
  nextDisabled,
  handleNext,
  handlePrev,
}: AuthorHeadingProps) {
  return (
    <div className="author__wrapper__text-wrap">
      <h1>인물&작품</h1>
      <p>Hommerce에서만 만나볼 수 있는 특별한 상품들을 지금 소개합니다.</p>
      <div className="add">
        <span>더보기</span>
        <MdAdd className="icon" />
      </div>
      <div className="icons">
        <PrevIcon prevDisabled={prevDisabled} handlePrev={handlePrev} />
        <NextIcon nextDisabled={nextDisabled} handleNext={handleNext} />
      </div>
    </div>
  );
}
