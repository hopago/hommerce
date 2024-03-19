import { HttpError } from "@/app/fetcher/error";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type UseSubCategoryMutationProps = {
  bookId: string;
};

export const useSubCategoryMutation = ({
  bookId,
}: UseSubCategoryMutationProps) => {
  const queryClient = getQueryClient();

  const { mutate, isPending, isSuccess } = useMutation<
    IBook,
    HttpError | Error | unknown,
    { category: BookSubCategory }
  >({
    mutationKey: [QueryKeys.BOOK, bookId],
    mutationFn: ({ category }) =>
      reactQueryFetcher<IBook>({
        method: "PATCH",
        path: `/book/${bookId}`,
        body: {
          category,
        },
      }),
    onSuccess: async (updatedBook) => {
      try {
        await queryClient.setQueryData([QueryKeys.BOOK, bookId], updatedBook);
        toast.success("도서 정보가 성공적으로 업데이트 됐습니다.");
      } catch (err) {
        console.log(err);
        toast.error("도서 정보 변형 중 오류가 발생했어요.");
      }
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          toast.error("책 ID가 필요합니다.");
        }

        if (status === 404) {
          toast.error("도서를 찾지 못했습니다.");
        }

        if (status === 500) {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
        }
      } else if (err instanceof Error) {
        const { name, message } = err;

        toast.error(`${name}: ${message}`);
      } else {
        toast.error("예기치 못한 오류입니다.");
      }
    },
  });

  const mutateBookCategory = (category: BookSubCategory) => {
    mutate({ category });
  };

  return {
    mutateBookCategory,
    isPending,
    isSuccess,
  };
};