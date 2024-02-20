type MoveToFirstPageProps = {
  handleMoveToFirstPage: () => void;
};

export default function MoveToFirstPage({
  handleMoveToFirstPage,
}: MoveToFirstPageProps) {
  return (
    <button
      className="reviews-pagination__page-num"
      onClick={handleMoveToFirstPage}
      type="button"
    >
      <span>1</span>
    </button>
  );
}
