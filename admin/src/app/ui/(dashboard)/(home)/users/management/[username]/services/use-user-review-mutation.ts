import { HttpError } from "@/app/fetcher/error";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { useMutation } from "@tanstack/react-query";

import { useFilterReviews } from "@/app/store/use-filter-reviews";

import { toast } from "sonner";

const deleteReview = async (id: string) => {
  return reactQueryFetcher<string>({
    method: "DELETE",
    path: `/review?reviewId=${id}`,
  });
};

export const useUserReviewMutation = () => {
  const queryClient = getQueryClient();

  const { filter, searchTerm } = useFilterReviews();

  const { mutate, isPending } = useMutation<
    string | string[],
    HttpError | Error | unknown,
    string | string[]
  >({
    mutationKey: [QueryKeys.USER_REVIEW],
    mutationFn: async (ids) => {
      const idsArray = Array.isArray(ids) ? ids : [ids];
      const deletedIds = await Promise.all(
        idsArray.map((id) => deleteReview(id))
      );
      return deletedIds;
    },
    onSuccess: async (ids) => {
      const idsArray = Array.isArray(ids) ? ids : [ids];
      const prevReviews = queryClient.getQueryData<ReviewLogs>([
        QueryKeys.USER_REVIEW,
        filter,
        searchTerm,
      ]);
      if (!prevReviews) {
        await queryClient.invalidateQueries({
          queryKey: [QueryKeys.USER_REVIEW, filter, searchTerm],
        });
        return;
      }
      const filteredReviews = prevReviews.filter(
        (review) => !idsArray.includes(review._id)
      );
      try {
        await queryClient.setQueryData(
          [QueryKeys.USER_REVIEW, filter, searchTerm],
          filteredReviews
        );
      } catch (err) {
        console.error(err);
        toast.error("유저 데이터 변형 중 오류가 발생했어요.");
      }
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          toast.error("리뷰 아이디가 필요합니다.");
        }

        if (status === 404) {
          toast.error("리뷰를 찾지 못했습니다.");
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

  return {
    mutate,
    isPending,
  };
};
