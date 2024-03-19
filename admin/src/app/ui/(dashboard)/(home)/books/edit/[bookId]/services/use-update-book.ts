import { HttpError } from "@/app/fetcher/error";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type UseUpdateBookProps = {
  bookId: string;
};

export type UpdatedBookProps = Partial<IBook>;

export const useUpdateBook = ({ bookId }: UseUpdateBookProps) => {
  const queryClient = getQueryClient();

  const { mutate, isPending } = useMutation<
    IBook,
    HttpError | Error | unknown,
    UpdatedBookProps
  >({
    mutationKey: [QueryKeys.BOOK, bookId],
    mutationFn: (props) =>
      reactQueryFetcher<IBook>({
        method: "PATCH",
        path: `/book/${bookId}`,
        body: {
          ...props,
        },
      }),
    onSuccess: (updatedBook) => {
      queryClient.setQueryData([QueryKeys.BOOK, bookId], updatedBook);
      toast.success("도서 정보가 성공적으로 업데이트 됐습니다.");
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          toast.error("부적절한 필드가 포함 됐습니다.");
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

  const mutateBook = (props: UpdatedBookProps) => {
    mutate(props);
  };

  return {
    mutateBook,
    isPending,
  };
};
