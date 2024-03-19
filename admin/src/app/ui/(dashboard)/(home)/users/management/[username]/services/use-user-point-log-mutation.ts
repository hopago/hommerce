import { HttpError } from "@/app/fetcher/error";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";
import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";

import { createQueryString } from "../../../../utils/createQueryString";
import { creatorFilterPoints } from "@/app/store/use-filter";
import { useCreatorPagination } from "@/app/store/use-pagination";

const updatePointLog = async ({
  userId,
  pointId,
  amount,
  desc,
}: {
  userId: string;
  pointId: string;
  amount?: number;
  desc?: string;
}) => {
  const query = createQueryString({ pointLogId: pointId });

  return reactQueryFetcher<PointLog>({
    method: "PATCH",
    path: `/point/log/${userId}?${query}`,
    body: {
      amount,
      desc,
    },
  });
};

export const useUserPointLogMutation = () => {
  const queryClient = getQueryClient();

  const { sort, filter, searchTerm } = creatorFilterPoints();
  const { currentPage } = useCreatorPagination();

  const { mutate, isPending, isSuccess } = useMutation<
    PointLog,
    HttpError | Error | unknown,
    { pointId: string; userId: string; amount?: number; desc?: string }
  >({
    mutationKey: [QueryKeys.USER_POINT_LOG],
    mutationFn: ({ pointId, userId, amount, desc }) =>
      updatePointLog({ pointId, userId, amount, desc }),
    onSuccess: (mutatedLogs) => {
      queryClient.setQueryData(
        [
          QueryKeys.USER_POINT_LOG,
          mutatedLogs.userId,
          sort,
          filter,
          searchTerm,
          currentPage,
        ],
        mutatedLogs
      );
      toast.success("포인트 변경을 성공적으로 마쳤어요.");
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          toast.error("포인트 아이디가 필요합니다.");
        }

        if (status === 404) {
          toast.error("포인트를 찾지 못했습니다.");
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
    isSuccess,
  };
};
