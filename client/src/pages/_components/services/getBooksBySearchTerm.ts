import { restFetcher } from "../../../fetcher/restFetcher";

import {
  createQueryString,
  translateQueryValueToEn,
} from "../../../fetcher/utils";

type GetBookBySearchTermProps = {
  filter: SearchType;
  searchTerm: string;
};

export const getBooksBySearchTerm = async ({
  filter,
  searchTerm,
}: GetBookBySearchTermProps) => {
  let path = `/book`;

  if (filter) {
    const translatedFilter = translateQueryValueToEn(filter);
    if (translatedFilter) {
      path += `?filter=${translatedFilter}`;
    }
  }

  if (searchTerm && searchTerm.trim() !== "") {
    const keywordQueryString = createQueryString({ keyword: searchTerm });
    path += (path.includes("?") ? "&" : "?") + keywordQueryString;
  }

  try {
    const books = await restFetcher<BookData>({
      method: "GET",
      path,
    });

    return books;
  } catch (err) {
    throw err;
  }
};
