import FixedSearchBar from "../_components/FixedSearchBar";
import SearchHeading from "./_components/SearchHeading";
import SearchAD from "./_components/SearchAD";
import SearchFilter from "./_components/SearchFilter";
import SearchContents from "./_components/SearchContents";
import FixedSeenBooks from "../../_components/FixedSeenBooks";
import { Footer } from "../_components";
import GlobalLoadingLayout from "../../_components/GlobalLoadingLayout";

import { getKeyword } from "./utils/get-keyword";
import { useModalDisplayState } from "./hooks/use-modal-state";
import { useSearchForm } from "../hooks/use-search-form";

import { useRecoilValue } from "recoil";
import { searchFilterState } from "../../recoil/search/search-filter";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../lib/react-query/query-key";
import { QueryFns } from "../../lib/react-query/queryFn";
import { daysToMs } from "../../lib/react-query/utils";
import { useHandleError } from "../hooks/use-handle-error";
import { ERROR_DETAILS } from "../../api/constants/errorDetails";

import { useState } from "react";

import noResults from "../../assets/img_no-results.png";

type LoadingProps = {
  initialSearchTerm: string;
};

export default function SearchIndex() {
  const keyword = getKeyword();

  useModalDisplayState();

  if (!keyword) return null;

  const { onSubmit, onChange, searchTerm } = useSearchForm();
  const filter = useRecoilValue<SearchType>(searchFilterState);
  const [initialSearchTerm] = useState(searchTerm);

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: [QueryKeys.BOOKS_DOCS_LENGTH, keyword],
    queryFn: () => QueryFns.GET_BOOK_SEARCH_RESULTS_LENGTH({ filter, keyword }),
    staleTime: daysToMs(5),
    gcTime: daysToMs(7),
    enabled: !!keyword,
  });

  useHandleError({
    error,
    isError,
    errorDetails: ERROR_DETAILS.BOOKS_DOCS_LENGTH,
  });

  if (isLoading) return <GlobalLoadingLayout />;

  if (isError)
    return <LoadingComponent initialSearchTerm={initialSearchTerm} />;

  if (isSuccess) {
    return (
      <div id="search-page">
        <FixedSearchBar
          onChange={onChange}
          onSubmit={onSubmit}
          searchTerm={searchTerm}
        />
        <header>
          <SearchHeading searchTerm={initialSearchTerm} docsLength={data} />
        </header>
        <main>
          <section className="search-ad">
            <SearchAD />
          </section>
          <section className="search-contents">
            <SearchFilter />
            <aside>
              <SearchContents docsLength={data} />
            </aside>
          </section>
        </main>
        <Footer />
        <FixedSeenBooks />
      </div>
    );
  }
}

function LoadingComponent({ initialSearchTerm }: LoadingProps) {
  return (
    <div id="search-page">
      <FixedSearchBar />
      <header>
        <SearchHeading searchTerm={initialSearchTerm} docsLength={0} />
      </header>
      <main>
        <section className="search-ad">
          <SearchAD />
        </section>
        <section className="search-contents">
          <SearchFilter />
          <aside>
            <div className="search-contents__container">
              <div className="no-content-wrap">
                <img
                  src={noResults}
                  alt="no-results"
                  className="no-content-img"
                />
                <p className="no-content-text">검색 결과가 없습니다.</p>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
      <FixedSeenBooks />
    </div>
  );
}
