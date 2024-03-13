import { reactQueryFetcher } from "@/app/fetcher/fetcher";

export const fetchUserPoint = (userId: string) => {
  const path = `/point/${userId}`;

  return reactQueryFetcher<number>({
    method: "GET",
    path,
  });
};
