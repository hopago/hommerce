import { QueryClient } from "@tanstack/react-query";

import { cache } from "react";

export const getQueryClient = cache(() => {
  let client: QueryClient | null = null;
  if (!client)
    client = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: true,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    });
  return client;
});

export const QueryKeys = {
  USER: "user",
  USER_SEARCH: "userSearchResults",
  USER_SESSION: "userSession",
  USER_REVIEW: "userReviews",
  USER_POINT: "userPoint",
  USER_POINT_LOG: "userPointLogs",
  BOOK: "book",
  BOOK_DETAIL: "bookDetails",
};
