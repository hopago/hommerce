import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";

import { getUsernameByPath } from "../utils/getUsernameByPath";
import { useMutation } from "@tanstack/react-query";

import { IUser } from "../../../../types/user";
import { UseUserInputParams } from "../hooks/use-user-input";

import { HttpError } from "@/app/fetcher/error";
import { reactQueryFetcher } from "@/app/fetcher/fetcher";

import { toast } from "sonner";

export const useUserUpdateMutation = () => {
  const queryClient = getQueryClient();
  const pathUsername = getUsernameByPath();

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
    onMutate: async ({ username, email }) => {
      await queryClient.cancelQueries({
        queryKey: [QueryKeys.USER, pathUsername],
      });
      const data = queryClient.getQueryData([QueryKeys.USER, pathUsername]) as
        | IUser[]
        | undefined;
      if (!data)
        return toast.error("데이터 변형 중 유저 데이터를 불러오지 못했어요.");

      const user = data[0];
      username
        ? (user.username = username)
        : email
        ? (user.email = email)
        : user;
      const updatedUser = [user];

      try {
        queryClient.setQueryData([QueryKeys.USER, pathUsername], updatedUser);
      } catch (err) {
        console.log(err);
        toast.error("유저 데이터 변형 중 오류가 발생했어요.");
      }

      return data;
    },
    onSuccess: (updatedUser) => {
      const mutatedUser = [updatedUser];

      try {
        queryClient.setQueryData([QueryKeys.USER, pathUsername], mutatedUser);
        toast.success("유저 업데이트가 성공적으로 처리됐습니다.");
      } catch (err) {
        console.log(err);
        toast.error("유저 데이터 변형 중 오류가 발생했어요.");
      }
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
