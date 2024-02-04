import { useState } from "react";
import { recommendGNBList } from "./constants/category";
import { cn } from "../../lib/utils";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdOutlineFormatListBulleted,
} from "react-icons/md";

export default function BannerControl() {
  const [active, setActive] = useState<HeadingCategory>("이달의 책");

  const onClick = (text: HeadingCategory) => {
    setActive(text);
  };

  return (
    <div className="domain-banner__control">
      <div className="domain-banner__control__horizontal">
        <ul>
          {recommendGNBList.map((list) => (
            <li
              onClick={() => onClick(list.text)}
              className={cn("", active === list.text && "active")}
              key={list.text}
            >
              <button>{list.text}</button>
            </li>
          ))}
        </ul>
        <div className="divider" />
        <div className="buttons">
          <MdOutlineArrowBackIos className="arrow left" />
          <MdOutlineArrowForwardIos className="arrow right" />
          <MdOutlineFormatListBulleted className="format-list" />
        </div>
      </div>
    </div>
  );
}
