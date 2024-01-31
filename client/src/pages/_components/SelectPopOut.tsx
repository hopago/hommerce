import { useSetRecoilState } from "recoil";
import { selectedCartState } from "../../recoil/search";

export default function SelectPopOut() {
  const setSelect = useSetRecoilState<SearchType>(selectedCartState);

  const selectList: SearchCategory = [
    {
      text: "통합검색",
      onClick: () => {
        setSelect("통합검색");
      },
    },
    {
      text: "제목",
      onClick: () => {
        setSelect("제목");
      },
    },
    {
      text: "저자",
      onClick: () => {
        setSelect("저자");
      },
    },
  ];

  return (
    <div className="popout">
      <ul className="popout__items">
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
