import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { createQueryString } from "../../utils/createQueryString";

export const fetchBookBySearchTerm = ({
  searchTerm,
}: {
  searchTerm: string;
}): Promise<IBook[]> => {
  const queryString = createQueryString({ keyword: searchTerm });
  const path = `/book?${queryString}`;

  return reactQueryFetcher({
    method: "GET",
    path,
  });
};
