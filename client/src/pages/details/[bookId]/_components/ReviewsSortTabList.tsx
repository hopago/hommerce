import { useRecoilState, useSetRecoilState } from "recoil";
import { ReviewTabList, setReviewTabList } from "../../../../recoil/review-tab";
import {
  ReviewSortOptions,
  setReviewSortOptionsState,
} from "../../../../recoil/review-select";

import SelectForm from "../../../../_components/SelectForm";
import { cn } from "../../../../lib/utils";

type TabList = {
  text: ReviewTabList;
  onClick: (text: ReviewTabList) => void;
}[];

export default function ReviewsSortTabList() {
  const [tab, setTab] = useRecoilState(setReviewTabList);
  const setSortOpt = useSetRecoilState(setReviewSortOptionsState);

  const tabList: TabList = [
    {
      text: "전체 리뷰",
      onClick: (text: ReviewTabList) => setTab(text),
    },
    {
      text: "한달 후 리뷰",
      onClick: (text: ReviewTabList) => setTab(text),
    },
  ];

  const selectFormItems = ["좋아요 순", "최신 순"];

  const onSelectItemClick = (text: ReviewSortOptions) => {
    setSortOpt(text);
  };

  return (
    <div className="reviews-sort-tab-list">
      <div className="tab-list-buttons">
        {tabList.map((list) => (
          <button
            type="button"
            key={list.text}
            onClick={() => list.onClick(list.text)}
            className={cn("", list.text === tab && "active")}
          >
            <span>{list.text}</span>
          </button>
        ))}
      </div>
      <SelectForm
        direction="bottom"
        text="좋아요 순"
        items={selectFormItems}
        className="reviews"
        onReviewSortOptionClick={onSelectItemClick}
      />
    </div>
  );
}
