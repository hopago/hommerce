import { HttpError } from "../fetcher/error";

import { reactQueryFetcher } from "../fetcher/fetcher";

export const getSingleBook = async (bookId: string) => {
  try {
    const book = await reactQueryFetcher({
      method: "GET",
      path: `/book/${bookId}`,
    });

    return book;
  } catch (err) {
    if (err instanceof HttpError) {
      const { status } = err;

      switch (status) {
        case 400:
          throw new Error("책 아이디를 받지 못했어요. 다시 시도하시겠어요?");
        case 404:
          throw new Error("해당 책 아이디로 책을 찾지 못했습니다.");
        case 500:
          throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
        default:
          throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
      }
    }

    throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
  }
};
