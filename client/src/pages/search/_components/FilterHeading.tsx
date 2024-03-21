import { useSetRecoilState } from "recoil";
import { searchFilterState } from "../../../recoil/search/search-filter";

import reset from "../../../assets/ico_reset.png";

export default function FilterHeading() {
  const setFilter = useSetRecoilState(searchFilterState);

  const onClick = () => {
    setFilter("통합검색");
  };

  return (
    <div className="heading-wrap">
      <h3>필터</h3>
      <button onClick={onClick}>
        <div className="img-wrap">
          <img src={reset} alt="reset-icon" />
        </div>
        <span>초기화</span>
      </button>
    </div>
  );
}
