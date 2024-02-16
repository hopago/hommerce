import BookContentList from "./BookContentList";
import BookIntro from "./BookIntro";
import BookInside from "./BookInside";
import BookPublisherReview from "./BookPublisherReview";

import { bookDetails } from "../../../../recoil/books";

import { DetailsContentType } from "./BookDetailsContents";

type DetailsInfoProps = {
  content: DetailsContentType;
};

export default function DetailsInfo({ content }: DetailsInfoProps) {
  switch (content) {
    case "책소개":
      return (
        <BookIntro intro={bookDetails.intro} awards={bookDetails.awards} />
      );
    case "목차":
      return <BookContentList contentList={bookDetails.contentsList} />;
    case "책 속으로":
      return <BookInside bookInside={bookDetails.bookInside} />;
    case "서평":
      return <BookPublisherReview review={bookDetails.bookPublisherReview} />;
    default:
      return null;
  }
}
