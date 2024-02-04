import { useSetRecoilState } from "recoil";
import { selectedCartState } from "../../recoil/search";
import { cn } from "../../lib/utils";
import { forwardRef } from "react";

type SelectPopOutProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

const SelectPopOut = forwardRef<HTMLDivElement, SelectPopOutProps>(
  ({ setShow, className }: SelectPopOutProps, ref) => {
    const setSelect = useSetRecoilState<SearchType>(selectedCartState);

    const handleSelectItemClick = (select: SearchType) => {
      setSelect(select);
      setShow(false);
    };

    const selectList: SearchCategory = [
      {
        text: "통합검색",
        onClick: () => handleSelectItemClick("통합검색"),
      },
      {
        text: "제목",
        onClick: () => handleSelectItemClick("제목"),
      },
      {
        text: "저자",
        onClick: () => handleSelectItemClick("저자"),
      },
    ];

    return (
      <div className={cn("popout", className && className)} ref={ref}>
        <ul className={cn("popout__items", className && className)}>
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
