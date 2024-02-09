import { LanguagePathName } from "../types/pathname";

export const transformPathname = (pathname: LanguagePathName) => {
  if (pathname === "kor") {
    return "국내도서";
  }
};
