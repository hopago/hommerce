import { useAuthorSlide } from "../hooks/use-author-slide";

import AuthorHeading from "./AuthorHeading";
import Authors from "./Authors";

import { authorsInfo } from "./constants/author";

export default function AuthorSection() {
  const { handleNext, handlePrev, prevDisabled, nextDisabled, currIndex } =
    useAuthorSlide({ length: authorsInfo?.length });

  return (
    <div className="author">
      <div className="author__wrapper">
        <AuthorHeading
          handleNext={handleNext}
          handlePrev={handlePrev}
          prevDisabled={prevDisabled}
          nextDisabled={nextDisabled}
        />
        <Authors authors={authorsInfo} currIndex={currIndex} />
      </div>
    </div>
  );
}
