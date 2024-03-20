import { reactQueryFetcher } from "@/app/fetcher/fetcher";

import { createQueryString } from "../../utils/createQueryString";

import { BookFilterOption } from "../_components/FilterBooks";

type FetchBookBySearchTermParams = {
  filter?: BookFilterOption;
  searchTerm?: string;
  pageNum?: number;
  sort?: "최신순" | "오래된순";
};

const translateQueryValueToEn = (filter: BookFilterOption) => {
  const filterMap = {
    통합검색: null,
    제목: "title",
    저자: "author",
  };

  return filterMap[filter] || null;
};

export const fetchBookBySearchTerm = ({
  filter,
  searchTerm,
  pageNum,
  sort = "최신순",
}: FetchBookBySearchTermParams): Promise<BookData> => {
  let path = `/book`;

  const sortQueryString = createQueryString({ sort });

  let filterQueryString: string | null = null;
  if (filter && translateQueryValueToEn(filter)) {
    filterQueryString = translateQueryValueToEn(filter);
    path += `?${filterQueryString}=${filterQueryString}`;

    if (searchTerm && searchTerm.trim() !== "") {
      const keywordQueryString = createQueryString({ keyword: searchTerm });
      path += `&${keywordQueryString}`;
    }
    path += `&${sortQueryString}`;
  } else {
    path += `?${sortQueryString}`;
  }

  if (pageNum) {
    const pageNumQueryString = `pageNum=${pageNum}`;
    path += `&${pageNumQueryString}`;
  }

  return reactQueryFetcher<BookData>({
    method: "GET",
    path,
  });
};
