import { useEffect, useState } from "react";

import { getPageTotal } from "../../utils/getPageTotal";

import { useSelectReview } from "@/app/store/use-select-review";

type LogItem = {
  _id: string;
  bookTitle?: string;
  desc: string;
  userId?: string;
  pointId?: string;
  amount?: number;
  createdAt: Date;
  updatedAt: Date;
};

type Data = ReviewLogs | PointLogs;

type UsePaginatedDataParams = {
  data: Data;
  sort: "최신순" | "오래된순";
  handleMoveToFirstPage: () => void;
  currentPage: number;
};

const PAGE_THRESHOLD = 8;

export function usePaginatedData({
  data,
  sort,
  handleMoveToFirstPage,
  currentPage,
}: UsePaginatedDataParams) {
  const [paginatedData, setPaginatedData] = useState<LogItem[]>(data);

  const { resetState } = useSelectReview();

  useEffect(() => {
    const computePaginatedReviews = () => {
      const startIdx = PAGE_THRESHOLD * (currentPage - 1);
      const endIdx = startIdx + PAGE_THRESHOLD;
      return paginatedData.slice(startIdx, endIdx);
    };

    setPaginatedData(computePaginatedReviews());
  }, [currentPage]);

  useEffect(() => {
    handleMoveToFirstPage();
    resetState();

    const sortData = (a: LogItem, b: LogItem) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sort === "최신순" ? dateB - dateA : dateA - dateB;
    };

    setPaginatedData((prev) => [...prev].sort(sortData));
  }, [sort]);

  useEffect(() => {
    resetState();
  }, [currentPage]);

  return {
    paginatedData,
    pageTotal: getPageTotal(data.length),
  };
}
