import { getValidSearchTerm } from "../utils/getValidSearchTerm";

export const translateQueryValueToEn = (filter: SearchType) => {
  const filterMap = {
    통합검색: null,
    제목: "title",
    저자: "author",
  };

  return filterMap[filter] || null;
};

export const translateFilterValueToEn = (filter: SearchFilter) => {
  const filterMap = {
    통합검색: null,
    상품명: "title",
    "저자/역자": "author",
    출판사: "publisher",
  };

  return filterMap[filter] || null;
};

export const createQueryString = (params: Record<string, string>) => {
  const queryParams = new URLSearchParams();
  for (const key in params) {
    queryParams.append(key, getValidSearchTerm(params[key]));
  }
  return queryParams.toString();
};
