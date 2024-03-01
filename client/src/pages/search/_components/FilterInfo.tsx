import { useRecoilValue } from "recoil";
import { searchFilterState } from "../../../recoil/search-filter";

import { ProdMDBadge } from "../../../_components/ProdBadge";

export default function FilterInfo() {
  const filter = useRecoilValue(searchFilterState);

  return (
    <div className="filter-info">
      <ProdMDBadge text={filter} />
    </div>
  );
}
