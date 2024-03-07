import { getValidSearchTerm } from "./getValidSearchTerm";

export const createQueryString = (params: Record<string, string>) => {
  const queryParams = new URLSearchParams();
  for (const key in params) {
    queryParams.append(key, getValidSearchTerm(params[key]));
  }
  return queryParams.toString();
};
