import { createQueryString } from "../../../../utils/createQueryString";

import { reactQueryFetcher } from "@/app/fetcher/fetcher";

type FetchUserReviewsParams = {
  filter?: FilterOption;
  searchTerm?: string;
};

const translateQueryValueToEn = (filter: FilterOption) => {
  const filterMap = {
    "검색 옵션": null,
    "리뷰 ID": "_id",
    "리뷰 내용": "desc",
    "책 제목": "bookTitle",
  };

  return filterMap[filter] || null;
};

export const fetchUserReviews = ({
  filter,
  searchTerm,
}: FetchUserReviewsParams): Promise<ReviewLogs> => {
  let path: string = "/review";

  let filterQueryString: string | null = null;
  if (filter && translateQueryValueToEn(filter)) {
    filterQueryString = translateQueryValueToEn(filter);
    path += `?${filterQueryString}`;
  }

  let keywordQueryString: string | null = null;
  if (searchTerm && searchTerm.trim() !== "") {
    keywordQueryString = createQueryString({ keyword: searchTerm });
    path += filterQueryString
      ? `&${keywordQueryString}`
      : `?${keywordQueryString}`;
  }

  return reactQueryFetcher({
    method: "GET",
    path,
  });
};
