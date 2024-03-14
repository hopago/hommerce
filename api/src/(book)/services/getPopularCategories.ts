import { NextFunction } from "express";
import Book from "../models/book";
import { startOfMonth, endOfMonth, subMonths } from "date-fns";

interface CategoryData {
  _id: BookSubCategory;
  totalViews: number;
  count: number;
}

export const handleGetPopularCategories = async (next: NextFunction) => {
  try {
    const today = new Date();
    const lastMonthStart = startOfMonth(subMonths(today, 1));
    const lastMonthEnd = endOfMonth(subMonths(today, 1));

    const categories: CategoryData[] = await Book.aggregate([
      {
        $match: {
          createdAt: { $gte: lastMonthStart, $lte: lastMonthEnd },
        },
      },
      {
        $group: {
          _id: "$category",
          totalViews: { $sum: "$views" },
          count: { $sum: 1 },
        },
      },
      { $sort: { totalViews: -1 } },
      { $limit: 5 },
    ]);

    return categories;
  } catch (err) {
    next(err);
  }
};
