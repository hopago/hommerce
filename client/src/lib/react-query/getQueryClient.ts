import { QueryClient } from "@tanstack/react-query";

let client: QueryClient | null = null;

export const getQueryClient = () => {
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
};
