import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import {
  QueryKey,
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { useHandleError } from "../hooks/use-handle-error";

import { FaSpinner } from "react-icons/fa";

import styles from "./review-log-list.module.css";
import { cn } from "@/app/ui/lib/utils";

import Button from "../../../../_components/Button";

import { toast } from "sonner";

type NoContentProps = {
  text?: string;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<
    QueryObserverResult<ReviewData | PointData | BookData | IBook[] | Error>
  >;
  error: Error | null;
  isRefetching: boolean;
  isRefetchError: boolean;
  queryKey: QueryKey;
};

export function NoContent({
  text = "리뷰를 아직 작성하지 않았어요.",
  refetch,
  error,
  isRefetching,
  isRefetchError,
  queryKey,
}: NoContentProps) {
  const queryClient = getQueryClient();

  const router = useRouter();

  const handleRefetch = () => async () => {
    try {
      await queryClient.resetQueries({
        queryKey,
      });
    } catch (err) {
      toast.error("쿼리키를 처리하던 도중 오류가 발생했습니다.");
    }

    try {
      refetch();

      toast.message("데이터를 성공적으로 불러왔어요.");
    } catch (err) {
      toast.error("데이터를 불러오지 못했어요. 잠시 후 다시 시도해주세요.");
    }
  };

  const onClick = isRefetchError ? () => router.refresh() : handleRefetch();

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
        <span className={styles.noContent}>{text}</span>
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
