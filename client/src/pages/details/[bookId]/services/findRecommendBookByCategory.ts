import { restFetcher } from "../../../../fetcher/restFetcher";

export const findRecommendBookByCategory = async (
  category: BookSubCategory
) => {
  if (!category) return;

  const path = `/book/recommend/category?category=${category}`;

  try {
    const recommendBooks = await restFetcher<IBook[]>({
      method: "GET",
      path,
    });

    return recommendBooks;
  } catch (err) {
    throw err;
  }
};
