import { useRecoilState } from "recoil";

import { currentPageState } from "../../../../recoil/review-paginate";

import PrevPage from "./PrevPage";
import SetPage from "./SetPage";
import MoveToLastPage from "./MoveToLastPage";
import NextPage from "./NextPage";
import MoveToFirstPage from "./MoveToFirstPage";

type PaginateControlProps = {
  pageTotal: number;
};

export default function PaginateControl({ pageTotal }: PaginateControlProps) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const prevPageDisabled = currentPage === 1;
  const nextPageDisabled = currentPage === pageTotal;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < pageTotal ? prevPage + 1 : prevPage
    );
  };

  const handleSetPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleMoveToFirstPage = () => {
    setCurrentPage(1);
  };
  const handleMoveToLastPage = () => {
    setCurrentPage(pageTotal);
  };

  return (
    <div className="reviews-pagination">
      <PrevPage onPrevPage={handlePrevPage} disabled={prevPageDisabled} />
      {currentPage > 8 && (
        <MoveToFirstPage handleMoveToFirstPage={handleMoveToFirstPage} />
      )}
      <SetPage
        currPage={currentPage}
        total={pageTotal}
        onSetPage={handleSetPage}
      />
      {pageTotal - 8 < currentPage && (
        <MoveToLastPage
          pageTotal={pageTotal}
          handleMoveToLastPage={handleMoveToLastPage}
        />
      )}
      <NextPage onNextPage={handleNextPage} disabled={nextPageDisabled} />
    </div>
  );
}
