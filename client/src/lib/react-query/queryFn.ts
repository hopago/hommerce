import { getResultsTotal } from "../../pages/search/services/getResultsTotal";
import { getReviewTotalByBookId } from "../../pages/search/services/getReviewTotalByBookId";

type BookSearchResultsProps = {
  filter: SearchType;
  keyword: string;
};

type ReviewTotalProps = { bookId: string };

export const QueryFns = {
  GET_BOOK_SEARCH_RESULTS_LENGTH: ({
    filter,
    keyword,
  }: BookSearchResultsProps) =>
    getResultsTotal({ filter, searchTerm: keyword }),
  GET_REVIEW_TOTAL_BY_BOOK_ID: ({ bookId }: ReviewTotalProps) =>
    getReviewTotalByBookId({ bookId }),
};
