import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import Button from "../../_components/Button";

import styles from "./api-refetch.module.css";

import { useRouter } from "next/navigation";

import { FaSpinner } from "react-icons/fa";

type ApiRefetchProps<T> = {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<T[], Error>>;
  isRefetching: boolean;
  isRefetchError: boolean;
  isError: boolean;
};

export default function ApiRefetch<T>({
  refetch,
  isRefetching,
  isRefetchError,
  isError,
}: ApiRefetchProps<T>) {
  const router = useRouter();

  const onClick = () => (isRefetchError ? refetch() : router.back());

  const buttonText = isError
    ? "재시도"
    : isRefetchError
    ? "이전 페이지로"
    : null;

  const buttonIcon = isRefetching ? (
    <FaSpinner className={styles.loadingIcon} />
  ) : null;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          {isError ? (
            <span className={styles.defaultText}>
              데이터를 불러오지 못했어요. 다시 시도하겠어요?
            </span>
          ) : isRefetching ? (
            <span className={styles.defaultText}>데이터 불러오는 중...</span>
          ) : (
            <span className={styles.errorText}>
              무언가 잘못됐군요. 잠시 후 다시 시도해주세요.
            </span>
          )}
        </div>
        <div className={styles.buttonWrap}>
          <Button
            type="button"
            text={buttonText}
            icon={buttonIcon}
            onClick={onClick}
            disabled={isRefetching}
            display="inline-block"
          />
        </div>
      </div>
    </div>
  );
}
