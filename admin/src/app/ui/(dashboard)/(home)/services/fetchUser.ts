import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { IUser } from "../types/user";
import { createQueryString } from "../utils/createQueryString";

export const fetchUserBySearchTerm = ({
  searchTerm,
}: {
  searchTerm: string;
}): Promise<IUser[]> => {
  const queryString = createQueryString({ keyword: searchTerm });
  const path = `/user?${queryString}`;

  return reactQueryFetcher({
    method: "GET",
    path,
  });
};
