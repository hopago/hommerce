import { restFetcher } from "../../../fetcher/restFetcher";

import {
  createQueryString,
  translateQueryValueToEn,
} from "../../../fetcher/utils";

type GetResultsTotalProps = {
  filter: SearchType;
  searchTerm: string;
};

export const getResultsTotal = async ({
  filter,
  searchTerm,
}: GetResultsTotalProps) => {
  let path = `/book/docs`;

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
    const docsLength = await restFetcher<number>({
      method: "GET",
      path,
    });

    return docsLength;
  } catch (err) {
    throw err;
  }
};
