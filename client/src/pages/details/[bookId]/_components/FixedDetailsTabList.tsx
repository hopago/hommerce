import { useLayoutEffect, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

import { cn } from "../../../../lib/utils";

import { DetailsIndexIds } from "..";

import { useNavigate } from "react-router-dom";

type FixedDetailsTabListProps = {
  isInView?: DetailsIndexIds | null;
};

type TabAction = (id: DetailsIndexIds) => void | (() => void);

type DetailsTabItem = {
  innerText: string;
  action: TabAction;
  linkedId: DetailsIndexIds | null;
};

export default function FixedDetailsTabList({
  isInView,
}: FixedDetailsTabListProps) {
  const navigate = useNavigate();

  const isMedium = useMediaQuery("(max-width:740px)");
  const DETAILS_VIEW_SCROLL_THRESHOLD = 1146;

  const handleNavigation = (id: DetailsIndexIds) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const detailsTabList: DetailsTabItem[] = [
    {
      innerText: "상품정보",
      action: handleNavigation,
      linkedId: "prod-info",
    },
    {
      innerText: "리뷰",
      action: handleNavigation,
      linkedId: "prod-review",
    },
    {
      innerText: "홈페이지로 이동",
      action: () => navigate("/"),
      linkedId: null,
    },
  ];

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    if (isMedium) return;

    const setCurrScroll = () => {
      setTimeout(() => {
        setScrollY(window.scrollY);
      }, 150);
    };

    window.addEventListener("scroll", setCurrScroll);

    return () => {
      window.removeEventListener("scroll", setCurrScroll);
    };
  }, [isMedium]);

  useLayoutEffect(() => {
    if (isMedium) {
      return setIsScrolled(true);
    }

    if (scrollY > DETAILS_VIEW_SCROLL_THRESHOLD) {
      setIsScrolled(true);
    } else if (scrollY <= DETAILS_VIEW_SCROLL_THRESHOLD) {
      setIsScrolled(false);
    }
  }, [scrollY, isMedium]);

  return (
    isScrolled && (
      <div className="fixed-details-tab-list">
        <ul className="tabs">
          {detailsTabList.map((list) => (
            <li
              key={list.innerText}
              className={cn("", isInView === list.linkedId && "active")}
              onClick={() => list.action(list.linkedId!)}
            >
              {list.innerText}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
