import { useLocation } from "react-router-dom";

export const getKeyword = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  if (keyword) {
    return keyword;
  }
};
