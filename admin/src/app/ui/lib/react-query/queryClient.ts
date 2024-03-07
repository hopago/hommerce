import { QueryClient } from "react-query";

export const getQueryClient = () => {
  let client: QueryClient | null = null;
  if (!client)
    client = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: Infinity,
          staleTime: Infinity,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        },
      },
    });
  return client;
};
