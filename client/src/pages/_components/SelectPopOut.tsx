import { useSetRecoilState } from "recoil";
import { searchFilterState } from "../../recoil/search-filter";

import { cn } from "../../lib/utils";

import { forwardRef } from "react";

type SelectPopOutProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  animationName?: string;
  className?: string;
};

const SelectPopOut = forwardRef<HTMLDivElement, SelectPopOutProps>(
  ({ setShow, className, animationName }: SelectPopOutProps, ref) => {
    const setSelect = useSetRecoilState<SearchFilter>(searchFilterState);

    const selectList: SearchCategory = [
      {
        text: "통합검색",
        onClick: () => handleSelectItemClick("통합검색"),
      },
      {
        text: "제목",
        onClick: () => handleSelectItemClick("상품명"),
      },
      {
        text: "저자",
        onClick: () => handleSelectItemClick("저자/역자"),
      },
    ];

    const handleSelectItemClick = (select: SearchFilter) => {
      setSelect(select);
      setShow(false);
    };

    return (
      <div
        className={cn("popout fade-in-dropdown", className && className)}
        ref={ref}
      >
        <ul
          className={cn(
            "popout__items",
            animationName && animationName,
            className && className
          )}
        >
          {selectList.map((list) => (
            <li onClick={list.onClick} key={list.text}>
              <div>
                <span>{list.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default SelectPopOut;
