export const getPaginationWindow = ({
  currPage,
  total,
}: {
  currPage: number;
  total: number;
}) => {
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

  return { pages, endPage };
};
