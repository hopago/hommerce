import RecommendBookInformationBookList from "./RecommendBookInformation-BookList";
import RecommendBookInformationMarketing from "./RecommendBookInformation-Marketing";
import RecommendBookInformationHeading from "./RecommendBookInformationHeading";

export default function RecommendBookInformation() {
  return (
    <div className="recommend-books__user">
      <RecommendBookInformationHeading />
      <div className="recommend-books__user__horizontal">
        <RecommendBookInformationMarketing />
        <RecommendBookInformationBookList />
      </div>
    </div>
  );
}
