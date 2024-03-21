import { restFetcher } from "../../../fetcher/restFetcher";

import {
  createQueryString,
  translateFilterValueToEn,
} from "../../../fetcher/utils";

type FetchBookBySearchTermParams = {
  filter?: SearchFilter;
  searchTerm?: string;
  pageNum?: number;
  sort?: SearchSort;
};

export const fetchBookBySearchTerm = async ({
  filter,
  searchTerm,
  sort = "인기순",
  pageNum,
}: FetchBookBySearchTermParams) => {
  let path = `/book`;

  const queryParams: Record<string, string> = {};

  if (filter) {
    const filterEn = translateFilterValueToEn(filter);
    if (filterEn) {
      queryParams.filter = filterEn;
    }
  }

  if (searchTerm && searchTerm.trim() !== "") {
    queryParams.keyword = searchTerm.trim();
  }

  queryParams.sort = sort;

  if (pageNum) {
    queryParams.pageNum = pageNum.toString();
  }

  const queryString = createQueryString(queryParams);
  path += `?${queryString}`;

  return restFetcher<BookData>({
    method: "GET",
    path,
  });
};
