import { useState } from "react";

import { cn } from "../../lib/utils";

type UiItems = "카테고리 전체보기" | "서비스 전체보기";

export default function AllCategoriesSelect() {
  const uiItems: UiItems[] = ["카테고리 전체보기", "서비스 전체보기"];

  const [currSection, setCurrSection] = useState<UiItems>("카테고리 전체보기");

  return (
    <div className="all-categories__select">
      <ul className="ui-tab">
        {uiItems.map((item) => (
          <li
            key={item}
            className={cn("ui-tab__list", currSection === item && "active")}
            onClick={() => setCurrSection(item)}
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
