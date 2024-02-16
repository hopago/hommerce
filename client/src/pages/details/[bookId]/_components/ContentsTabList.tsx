import React from "react";

import { cn } from "../../../../lib/utils";

import { DetailsContentType } from "./BookDetailsContents";

type ContentsTabListProps = {
  contents: DetailsContentType[];
  content: DetailsContentType;
  setContent: React.Dispatch<React.SetStateAction<DetailsContentType>>;
};

export default function ContentsTabList({
  contents,
  content,
  setContent,
}: ContentsTabListProps) {
  return (
    <div className="details-prod-contents__horizontal__inner__tab-list">
      <h1>작품소개</h1>
      <ol>
        {contents.map((c, i) => (
          <React.Fragment key={`${c}-${i}`}>
            <li
              className={cn("", content === c && "active")}
              onClick={() => setContent(c)}
            >
              <span>{c}</span>
            </li>
            {i !== contents.length - 1 && <div className="divider" />}
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
}
