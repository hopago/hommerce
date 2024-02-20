import { useRecoilState } from "recoil";

import { currentPageState } from "../../../../recoil/review-paginate";

import PrevPage from "./PrevPage";
import SetPage from "./SetPage";
import MoveToLastPage from "./MoveToLastPage";
import NextPage from "./NextPage";

type PaginateControlProps = {
  pageTotal: number;
};

export default function PaginateControl({ pageTotal }: PaginateControlProps) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSetPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleMoveToLastPage = (lastPageNumber: number) => {
    setCurrentPage(lastPageNumber);
  };

  return (
    <div className="reviews-pagination">
      <PrevPage onPrevPage={handlePrevPage} />
      <SetPage
        currPage={currentPage}
        total={pageTotal}
        onSetPage={handleSetPage}
      />
      <MoveToLastPage onMoveToLastPage={handleMoveToLastPage} />
      <NextPage onNextPage={handleNextPage} />
    </div>
  );
}
