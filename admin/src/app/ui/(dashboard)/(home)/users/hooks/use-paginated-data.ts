import { useEffect, useState } from "react";

import { getPageTotal } from "../../utils/getPageTotal";

import { useSelectReview } from "@/app/store/use-select-review";

import { PAGE_THRESHOLD } from "../../constants/pagination";

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

type Data = ReviewLogs | PointLogs | IBook[];

type UsePaginatedDataParams = {
  data: Data;
  sort: "최신순" | "오래된순";
  handleMoveToFirstPage: () => void;
  currentPage: number;
};

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
  }, [sort]);

  useEffect(() => {
    resetState();
  }, [currentPage]);

  return {
    paginatedData,
    pageTotal: getPageTotal(data.length),
  };
}
