import { getIsSubscribed } from "../../pages/search/services/getIsSubscribed";
import { getResultsTotal } from "../../pages/search/services/getResultsTotal";
import { getReviewTotalByBookId } from "../../pages/search/services/getReviewTotalByBookId";
import { getSubscriptionLength } from "../../pages/search/services/getSubscriptionLength";

type BookSearchResultsProps = {
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
  GET_BOOK_SEARCH_RESULTS_LENGTH: ({
    filter,
    keyword,
  }: BookSearchResultsProps) =>
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
