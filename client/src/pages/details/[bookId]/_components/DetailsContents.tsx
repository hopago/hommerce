import { forwardRef } from "react";

import BookDetailsContents from "./BookDetailsContents";
import RecommendBooks from "./RecommendBooks";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../../lib/react-query/query-key";
import { QueryFns } from "../../../../lib/react-query/queryFn";
import { daysToMs } from "../../../../lib/react-query/utils";
import { useHandleError } from "../../../hooks/use-handle-error";
import { ERROR_DETAILS } from "../../../../api/constants/errorDetails";
import { getCategoryPath } from "../utils/getCategoryPath";

type DetailsContentsProps = {
  bookId: string | undefined;
  category: BookSubCategory | undefined;
  lang: BookParentCategory[] | undefined;
};

const DetailsContents = forwardRef<HTMLDivElement, DetailsContentsProps>(
  ({ bookId, category, lang }, ref) => {
    const { data, isError, error } = useQuery({
      queryKey: [QueryKeys.BOOK_DETAILS, bookId],
      queryFn: () => QueryFns.GET_BOOK_DETAILS(bookId!),
      staleTime: daysToMs(14),
      gcTime: daysToMs(17),
      enabled: !!bookId,
    });

    useHandleError({
      isError,
      error,
      errorDetails: ERROR_DETAILS.GET_BOOK_DETAILS,
    });

    if (!data) return null;

    return (
      <div id="prod-info" ref={ref} className="details-prod-contents">
        <div className="details-prod-contents__horizontal">
          <BookDetailsContents details={data} />
          {bookId && category && lang && (
            <RecommendBooks category={category} lang={getCategoryPath(lang)} />
          )}
        </div>
      </div>
    );
  }
);

export default DetailsContents;
