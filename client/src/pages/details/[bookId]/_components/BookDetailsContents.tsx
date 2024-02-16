import { useState } from "react";

import ContentsTabList from "./ContentsTabList";
import DetailsInfo from "./DetailsInfo";

export type DetailsContentType = "책소개" | "목차" | "책 속으로" | "서평";

export default function BookDetailsContents() {
  const detailsContents: DetailsContentType[] = [
    "책소개",
    "목차",
    "책 속으로",
    "서평",
  ];

  const [content, setContent] = useState<DetailsContentType>("책소개");

  return (
    <div className="details-prod-contents__horizontal__inner">
      <ContentsTabList
        contents={detailsContents}
        content={content}
        setContent={setContent}
      />
      <DetailsInfo content={content} />
    </div>
  );
}
