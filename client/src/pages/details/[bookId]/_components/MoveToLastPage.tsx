type MoveToLastPageProps = {
  handleMoveToLastPage: () => void;
  pageTotal: number;
};

export default function MoveToLastPage({
  handleMoveToLastPage,
  pageTotal,
}: MoveToLastPageProps) {
  return (
    <button
      type="button"
      className="reviews-pagination__page-num"
      onClick={handleMoveToLastPage}
    >
      <span>{pageTotal}</span>
    </button>
  );
}
