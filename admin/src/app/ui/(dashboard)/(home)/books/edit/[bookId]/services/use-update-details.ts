import { HttpError } from "@/app/fetcher/error";
import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { useMutation } from "@tanstack/react-query";
import { TextareaFields } from "../_components/BookDetailsEdit";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { toast } from "sonner";

export const updateDetails = ({ bookId }: { bookId: string }) => {
  const queryClient = getQueryClient();

  const { mutate, isPending } = useMutation<
    IDetails,
    Error | HttpError | Error | unknown,
    { body: Partial<TextareaFields> }
  >({
    mutationKey: [QueryKeys.BOOK_DETAIL, bookId],
    mutationFn: ({ body }) =>
      reactQueryFetcher({
        method: "PATCH",
        path: `/book/details/${bookId}`,
        body,
      }),
    onSuccess: (updatedDetails) => {
      queryClient.setQueryData([QueryKeys.BOOK_DETAIL, bookId], updatedDetails);
      toast.success("상세 정보 업데이트가 성공적으로 처리됐습니다.");
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          toast.error("부적합한 데이터 타입이거나 책 아이디가 필요합니다.");
        }

        if (status === 404) {
          toast.error("해당 책 아이디로 상세정보를 찾지 못했어요.");
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

  const handleMutate = ({ body }: { body: Partial<TextareaFields> }) => {
    mutate({ body });
  };

  return {
    handleMutate,
    isPending,
  };
};
