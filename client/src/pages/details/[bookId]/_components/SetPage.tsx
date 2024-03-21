import { cn } from "../../../../lib/utils";

type SetPageProps = {
  onSetPage: (pageNumber: number) => void;
  total: number;
  currPage: number;
};

export default function SetPage({ onSetPage, total, currPage }: SetPageProps) {
  let endPage = Math.min(currPage + 3, total);
  let startPage = Math.max(endPage - 6, 1);

  if (endPage - startPage < 6) {
    endPage = startPage + 6;
    if (endPage > total) {
      endPage = total;
      startPage = Math.max(total - 6, 1);
    }
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div>
      {pages.map((page, i) => (
        <button
          key={page}
          className={cn(
            "reviews-pagination__page-num",
            page === currPage && "active",
            i + 1 !== endPage && "gap"
          )}
          onClick={() => onSetPage(page)}
        >
          {page}
        </button>
      ))}
      {endPage < total && <span className="text-ellipsis">...</span>}
    </div>
  );
}
