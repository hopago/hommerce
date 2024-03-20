import { HttpError } from "@/app/fetcher/error";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { TextareaFields } from "../_components/BookDetailsEdit";

import { toast } from "sonner";

export const postDetails = ({ bookId }: { bookId: string }) => {
  const router = useRouter();

  const queryClient = getQueryClient();

  const { mutate, isPending } = useMutation<
    IDetails,
    HttpError | Error | unknown,
    { body: TextareaFields }
  >({
    mutationKey: [QueryKeys.BOOK_DETAIL, bookId],
    mutationFn: ({ body }) =>
      reactQueryFetcher({
        method: "POST",
        path: `/book/details/${bookId}`,
        body,
      }),
    onSuccess: (newDetails) => {
      queryClient.setQueryData([QueryKeys.BOOK_DETAIL, bookId], newDetails);

      const navigate = confirm(
        "도서 상세 정보를 성공적으로 업데이트 했습니다.\n도서 상세 페이지로 이동할까요?"
      );

      if (navigate) {
        router.push(`/books/${bookId}`);
        return;
      } else {
        return;
      }
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          toast.error("필수 필드가 채워지지 않았어요.");
        }

        if (status === 409) {
          toast.error("이미 상세정보가 존재합니다.");
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

  const handleMutate = (payload: IDetails) => {
    const { bookId, ...body } = payload;

    mutate({ body });
  };

  return {
    handleMutate,
    isPending,
  };
};
