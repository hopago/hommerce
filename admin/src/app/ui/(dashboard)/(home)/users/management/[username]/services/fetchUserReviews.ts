import { createQueryString } from "../../../../utils/createQueryString";

import { reactQueryFetcher } from "@/app/fetcher/fetcher";

type FetchUserReviewsParams = {
  filter?: FilterOption;
  searchTerm?: string;
  pageNum: number;
  userId: string;
  sort: "최신순" | "오래된순";
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
  sort = "최신순",
}: FetchUserReviewsParams): Promise<ReviewData> => {
  let path: string = `/review/user/${userId}`;

  const sortQueryString = createQueryString({ sort });

  let filterQueryString: string | null = null;
  if (filter && translateQueryValueToEn(filter)) {
    filterQueryString = translateQueryValueToEn(filter);
    path += `?${filterQueryString}`;

    if (searchTerm && searchTerm.trim() !== "") {
      const keywordQueryString = createQueryString({ keyword: searchTerm });
      path += `&${keywordQueryString}`;
    }

    path += `&${sortQueryString}`;
  } else {
    path += `?${sortQueryString}`;
  }

  const pageNumQueryString = `pageNum=${pageNum}`;
  path += `&${pageNumQueryString}`;

  return reactQueryFetcher<ReviewData>({
    method: "GET",
    path,
  });
};
