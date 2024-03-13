import { createQueryString } from "../../../../utils/createQueryString";

import { reactQueryFetcher } from "@/app/fetcher/fetcher";

type FetchUserReviewsParams = {
  filter?: FilterOption;
  searchTerm?: string;
  pageNum: number;
  userId: string;
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
  pageNum,
  userId,
}: FetchUserReviewsParams): Promise<ReviewData> => {
  let path: string = `/review/user/${userId}`;

  let filterQueryString: string | null = null;
  if (filter && translateQueryValueToEn(filter)) {
    filterQueryString = translateQueryValueToEn(filter);
    path += `?${filterQueryString}`;

    if (searchTerm && searchTerm.trim() !== "") {
      const keywordQueryString = createQueryString({ keyword: searchTerm });
      path += `&${keywordQueryString}`;
    }
  }

  return reactQueryFetcher<ReviewData>({
    method: "GET",
    path,
    body: {
      pageNum,
    },
  });
};
