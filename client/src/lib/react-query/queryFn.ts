import { fetchBookBySearchTerm } from "../../pages/_components/services/fetchBookBySearchTerm";
import { findRecommendBookByCategory } from "../../pages/details/[bookId]/services/findRecommendBookByCategory";
import { getBook } from "../../pages/details/[bookId]/services/getBook";
import { getBookDetails } from "../../pages/details/[bookId]/services/getBookDetails";
import { getIsSubscribed } from "../../pages/search/services/getIsSubscribed";
import { getResultsTotal } from "../../pages/search/services/getResultsTotal";
import { getReviewTotalByBookId } from "../../pages/search/services/getReviewTotalByBookId";
import { getSubscriptionLength } from "../../pages/search/services/getSubscriptionLength";

type BookSearchResultsProps = {
  filter?: SearchType;
  searchTerm?: string;
  pageNum?: number;
  sort?: SearchSort;
};

type BookSearchResultsLengthProps = {
  filter: SearchType;
  keyword: string;
};

type ReviewTotalProps = { bookId: string };

type GetFavorSubscriptionLengthProps = {
  bookId: string;
};

type GetFavorSubscriptionIsSubscribedProps = {
  bookId: string;
  userId: string;
};

export const QueryFns = {
  FIND_RECOMMEND_BOOK_BY_CATEGORY: (category: BookSubCategory) =>
    findRecommendBookByCategory(category),
  GET_BOOK: (bookId: string) => getBook(bookId),
  GET_BOOK_DETAILS: (bookId: string) => getBookDetails(bookId),
  GET_BOOK_SEARCH_RESULTS: ({
    filter,
    searchTerm,
    sort,
    pageNum,
  }: BookSearchResultsProps) =>
    fetchBookBySearchTerm({ filter, searchTerm, sort, pageNum }),
  GET_BOOK_SEARCH_RESULTS_LENGTH: ({
    filter,
    keyword,
  }: BookSearchResultsLengthProps) =>
    getResultsTotal({ filter, searchTerm: keyword }),
  GET_REVIEW_TOTAL_BY_BOOK_ID: ({ bookId }: ReviewTotalProps) =>
    getReviewTotalByBookId({ bookId }),
  GET_FAVOR_SUBSCRIPTION_LENGTH: ({
    bookId,
  }: GetFavorSubscriptionLengthProps) => getSubscriptionLength({ bookId }),
  GET_FAVOR_SUBSCRIPTION_IS_SUBSCRIBED: ({
    bookId,
    userId,
  }: GetFavorSubscriptionIsSubscribedProps) =>
    getIsSubscribed({ bookId, userId }),
};
