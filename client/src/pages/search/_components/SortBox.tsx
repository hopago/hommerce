import SortBoxButtons from "./SortBoxButtons";

export default function SortBox() {
  const temporaryLength = 104903; // TODO: Get Length

  return (
    <div className="search-contents__container__sort-box">
      <div className="search-contents__container__sort-box__wrapper">
        <div className="title-wrap">
          전체 <span>{temporaryLength.toLocaleString()}</span>건
        </div>
        <SortBoxButtons />
      </div>
    </div>
  );
}
