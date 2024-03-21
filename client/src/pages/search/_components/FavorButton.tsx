import heart from "../../../assets/ico_heart.png";
import heartActive from "../../../assets/ico_heart_active.png";

import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "../../../lib/react-query/getQueryClient";
import { QueryKeys } from "../../../lib/react-query/query-key";
import { MutateFns } from "../../../lib/react-query/mutateFn";
import { useHandleError } from "../../hooks/use-handle-error";
import { ERROR_DETAILS } from "../../../api/constants/errorDetails";

type FavorButtonProps = {
  favorLength?: number;
  bookId: string;
  author: string;
  title: string;
  img: string;
  userId: string | null;
  isSubscribed: boolean | undefined;
};

export default function FavorButton({
  favorLength,
  bookId,
  title,
  author,
  img,
  userId,
  isSubscribed,
}: FavorButtonProps) {
  const queryClient = getQueryClient();

  const { mutate, error, isError } = useMutation({
    mutationFn: () =>
      MutateFns.PATCH_FAVOR_ITEM({
        userId,
        book: {
          bookId,
          author,
          title,
          img,
        },
      }),
    onSuccess: () => {
      queryClient.setQueryData(
        [QueryKeys.FAVOR_LENGTH, bookId],
        favorLength ? favorLength + 1 : 1
      );
      queryClient.setQueryData(
        [QueryKeys.FAVOR_SUBSCRIPTION, bookId],
        !Boolean(isSubscribed)
      );
    },
  });

  useHandleError({
    error,
    isError,
    errorDetails: ERROR_DETAILS.PATCH_FAVOR_ITEM,
  });

  const onClick = () => mutate();

  return (
    <button className="favor-btn" onClick={onClick}>
      <div className="img-wrap">
        <img src={isSubscribed ? heartActive : heart} alt="heart-icon" />
      </div>
      <span>{favorLength ?? 0}</span>
    </button>
  );
}
