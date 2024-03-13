import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { useHandleError } from "../hooks/use-handle-error";

import { FaSpinner } from "react-icons/fa";

import styles from "./review-log-list.module.css";
import { cn } from "@/app/ui/lib/utils";

import Button from "../../../../_components/Button";

type NoContentProps = {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<ReviewData, Error>>;
  error: Error | null;
  isRefetching: boolean;
  isRefetchError: boolean;
};

export function NoContent({
  refetch,
  error,
  isRefetching,
  isRefetchError,
}: NoContentProps) {
  const queryClient = getQueryClient();

  const router = useRouter();

  const onClick = isRefetchError
    ? () => router.refresh()
    : () => async () => {
        await queryClient.resetQueries({
          queryKey: [QueryKeys.USER_REVIEW],
        });

        refetch();
      };

  useHandleError({ error, isError: isRefetchError, fieldName: "리뷰" });

  const buttonIcon = isRefetching ? (
    <FaSpinner className={styles.loadingIcon} />
  ) : null;
  const buttonText = isRefetching
    ? null
    : isRefetchError
    ? "페이지 새로고침"
    : "새로고침";
  const bgColor = isRefetchError ? "#BF444A" : undefined;

  return (
    <div className={styles.container}>
      <div className={cn(styles.wrap, styles.noContent)}>
        <span className={styles.noContent}>리뷰를 아직 작성하지 않았어요.</span>
        <Button
          type="button"
          text={buttonText}
          icon={buttonIcon}
          onClick={onClick}
          disabled={isRefetchError}
          backgroundColor={bgColor}
        />
      </div>
    </div>
  );
}
