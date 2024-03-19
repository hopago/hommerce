import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";

import { useRouter } from "next/navigation";

import { getUsernameByPath } from "../utils/getUsernameByPath";
import { useMutation } from "@tanstack/react-query";

import { IUser } from "../../../../types/user";

import { HttpError } from "@/app/fetcher/error";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";

import { toast } from "sonner";

export const useUserUpdateMutation = () => {
  const queryClient = getQueryClient();

  const pathUsername = getUsernameByPath();

  const router = useRouter();

  const { mutate, isPending } = useMutation<
    IUser,
    HttpError | Error | unknown,
    { username?: string; email?: string }
  >({
    mutationKey: [QueryKeys.USER, pathUsername],
    mutationFn: ({ username, email }) =>
      reactQueryFetcher<IUser>({
        method: "PATCH",
        path: `/user?username=${pathUsername}`,
        body: {
          ...(username !== undefined && { username }),
          ...(email !== undefined && { email }),
        },
      }),
    onSuccess: (updatedUser) => {
      const mutatedUser = [updatedUser];

      queryClient.setQueryData([QueryKeys.USER, pathUsername], mutatedUser);
      toast.success("유저 업데이트가 성공적으로 처리됐습니다.");

      router.push(`/users/management/${updatedUser.username}`);
    },
    onError: (err) => {
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          toast.error("적합한 유저명 혹은 이메일 타입이 아닙니다.");
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

  const mutateUserField = ({
    username,
    email,
  }: {
    username?: string;
    email?: string;
  }) => {
    mutate({ username, email });
  };

  return {
    mutateUserField,
    isPending,
  };
};
