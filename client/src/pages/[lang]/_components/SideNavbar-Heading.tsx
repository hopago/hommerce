import { useParams } from "react-router-dom";

import { LanguagePathName } from "../types/pathname";
import { transformPathname } from "../utils/transformPathnameToKor";

type RouteParams = {
  lang?: LanguagePathName;
  category?: BookSubCategory;
};

export default function Heading() {
  const pathname = useParams<RouteParams>();

  const { lang } = pathname;

  return (
    <div className="title">
      <h1>{transformPathname(lang!)}</h1>
    </div>
  );
}
