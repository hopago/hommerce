import { useRecoilValue } from "recoil";
import { searchFilterState } from "../../../recoil/search/search-filter";
import { searchSortState } from "../../../recoil/search/search-page-sort";

import { ProdMDBadge } from "../../../_components/ProdBadge";

export default function FilterInfo() {
  const filter = useRecoilValue(searchFilterState);
  const sort = useRecoilValue(searchSortState);

  return (
    <div className="filter-info">
      <ProdMDBadge text={filter} />
      <ProdMDBadge text={sort} />
    </div>
  );
}
