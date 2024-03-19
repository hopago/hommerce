import { HttpError } from "@/app/fetcher/error";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";
import { CLIENT_ERROR } from "../constants/error-message";

type UseSellTypeMutationProps = {
  bookId: string;
};

export const useSellTypeMutation = ({ bookId }: UseSellTypeMutationProps) => {
  const queryClient = getQueryClient();

  const { mutate, isPending } = useMutation<
    IBook,
    HttpError | Error | unknown,
    { sellWay: SellWay }
  >({
    mutationKey: [QueryKeys.BOOK, bookId],
    mutationFn: ({ sellWay }) =>
      reactQueryFetcher<IBook>({
        method: "PATCH",
        path: `/book/${bookId}`,
        body: {
          sellWay,
        },
      }),
    onSuccess: async (updatedBook) => {
      queryClient.setQueryData<IBook>([QueryKeys.BOOK, bookId], updatedBook);
      toast.success("도서 정보가 성공적으로 업데이트 됐습니다.");
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status, message } = err;

        if (status === 400) {
          if (message === CLIENT_ERROR.BOOK_ID_REQUIRED) {
            toast.error("책 ID가 필요합니다.");
          } else {
            toast.error("잘못된 요청입니다.");
          }
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

  const mutateBookSellType = (sellWay: SellWay) => {
    mutate({ sellWay });
  };

  return {
    mutateBookSellType,
    isPending,
  };
};
