import { MdArrowRight } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import ThisCategoryBestList from "./ThisCategoryBestList";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../../lib/react-query/query-key";
import { QueryFns } from "../../../../lib/react-query/queryFn";
import { daysToMs } from "../../../../lib/react-query/utils";
import { useHandleError } from "../../../hooks/use-handle-error";
import { ERROR_DETAILS } from "../../../../api/constants/errorDetails";

type RecommendBooksProps = {
  category: BookSubCategory;
  lang: LanguageType;
};

export default function RecommendBooks({
  category,
  lang,
}: RecommendBooksProps) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/category/${lang}/${category}`);
  };

  const { data, isSuccess, isError, error } = useQuery({
    queryKey: [QueryKeys.RECOMMEND_BOOK, category],
    queryFn: () => QueryFns.FIND_RECOMMEND_BOOK_BY_CATEGORY(category),
    staleTime: daysToMs(7),
    gcTime: daysToMs(9),
    enabled: !!category,
  });

  useHandleError({
    isError,
    error,
    errorDetails: ERROR_DETAILS.FIND_RECOMMEND_BOOK_BY_CATEGORY,
  });

  if (isSuccess) {
    return (
      <div className="details-prod-contents__horizontal__recommend-books">
        <div className="details-prod-contents__horizontal__recommend-books__heading">
          <h1>이 분야의 베스트</h1>
          <button onClick={onClick}>
            <span>더보기</span>
            <div className="icon-wrap">
              <MdArrowRight />
            </div>
          </button>
        </div>
        <ThisCategoryBestList books={data!} />
      </div>
    );
  }
}
