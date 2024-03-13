import { reactQueryFetcher } from "@/app/fetcher/fetcher";

import { PointFilterOption } from "../_components/FilterPointLogs";
import { createQueryString } from "../../../../utils/createQueryString";

type FetchUserPointLogProps = {
  userId: string;
  filter?: PointFilterOption;
  searchTerm?: string;
  pageNum: number;
};

const translateQueryValueToEn = (filter: PointFilterOption) => {
  const filterMap = {
    "검색 옵션": null,
    "포인트 아이디": "_id",
    "지급 내용": "desc",
    지급량: "bookTitle",
  };

  return filterMap[filter] || null;
};

export const fetchUserPointLog = ({
  userId,
  filter,
  searchTerm,
  pageNum,
}: FetchUserPointLogProps) => {
  let path = `/point/log/${userId}`;

  let filterQueryString: string | null = null;
  if (filter && translateQueryValueToEn(filter)) {
    filterQueryString = translateQueryValueToEn(filter);
    path += `?${filterQueryString}`;

    if (searchTerm && searchTerm.trim() !== "") {
      const keywordQueryString = createQueryString({ keyword: searchTerm });
      path += `&${keywordQueryString}`;
    }
  }

  return reactQueryFetcher<PointData>({
    method: "GET",
    path,
    body: {
      pageNum,
    },
  });
};
