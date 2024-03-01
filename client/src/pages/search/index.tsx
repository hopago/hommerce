import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useSearchForm } from "../hooks/use-search-form";

import FixedSearchBar from "../_components/FixedSearchBar";
import SearchHeading from "./_components/SearchHeading";
import SearchAD from "./_components/SearchAD";
import SearchFilter from "./_components/SearchFilter";
import SearchContents from "./_components/SearchContents";
import FixedSeenBooks from "../../_components/FixedSeenBooks";

import { useRecoilValue } from "recoil";
import { seenModalState } from "../../recoil/seen-modal";
import { Footer } from "../_components";

export default function SearchIndex() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  const show = useRecoilValue(seenModalState);

  const temporaryDocsLength = 104903;

  const { onSubmit, onChange, searchTerm, setSearchTerm } = useSearchForm();

  if (!keyword) return null;

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <div id="search-page">
      <FixedSearchBar
        onChange={onChange}
        onSubmit={onSubmit}
        searchTerm={searchTerm}
      />
      <header>
        <SearchHeading
          searchTerm={searchTerm}
          docsLength={temporaryDocsLength}
        />
      </header>
      <main>
        <section className="search-ad">
          <SearchAD />
        </section>
        <section className="search-contents">
          <SearchFilter />
          <aside>
            <SearchContents docsLength={temporaryDocsLength} />
          </aside>
        </section>
      </main>
      <Footer />
      <FixedSeenBooks />
    </div>
  );
}
