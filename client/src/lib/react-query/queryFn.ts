import { getResultsTotal } from "../../pages/search/services/getResultsTotal";

export const QueryFns = {
  GET_BOOK_SEARCH_RESULTS_LENGTH: ({
    filter,
    keyword,
  }: {
    filter: SearchType;
    keyword: string;
  }) => getResultsTotal({ filter, searchTerm: keyword }),
};
