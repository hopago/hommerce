import { useMutation } from "@tanstack/react-query";

import { IUser } from "../../../../types/user";

import { HttpError } from "@/app/fetcher/error";

import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { getUsernameByPath } from "../utils/getUsernameByPath";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";

import { toast } from "sonner";

export const useUserStatusMutation = () => {
  const queryClient = getQueryClient();
  const username = getUsernameByPath();

  const { mutate, isPending } = useMutation<
    IUser,
    HttpError | Error | unknown,
    { status: UserStatus }
  >({
    mutationKey: [QueryKeys.USER, username],
    mutationFn: ({ status }) =>
      reactQueryFetcher<IUser>({
        method: "PATCH",
        path: `/user?username=${username}`,
        body: {
          status,
        },
      }),
    onSuccess: (updatedUser) => {
      const mutatedUser = [updatedUser];

      queryClient.setQueryData([QueryKeys.USER, username], mutatedUser);
      toast.success("유저 업데이트가 성공적으로 처리됐습니다.");
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          toast.error("적합한 상태 타입이 아닙니다.");
        }

        if (status === 404) {
          toast.error("유저를 찾지 못했습니다.");
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

  const mutateUserStatus = (status: UserStatus) => {
    mutate({ status });
  };

  return {
    mutateUserStatus,
    isPending,
  };
};
