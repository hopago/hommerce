"use client";

import { useEffect } from "react";

import { restFetcher } from "@/app/fetcher/fetcher";
import { QueryKeys } from "@/app/lib/getQueryClient";
import { useQuery } from "@tanstack/react-query";
import { HttpError } from "@/app/fetcher/error";

import { daysToMs } from "../../../../utils/daysToMs";

import { toast } from "sonner";

import styles from "./user-logs.module.css";

import { formatDate } from "../../../../utils/formatDate";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

type UserSessionLogsProps = {
  userId: string;
};

// 유료 플랜 구독시 세션 추가

export default function UserSessionLogs({ userId }: UserSessionLogsProps) {
  const { data, isLoading, isSuccess, isError, error } = useQuery<Date>({
    queryKey: [QueryKeys.USER_SESSION, userId],
    queryFn: () =>
      restFetcher({
        url: `/user/session?userId=${userId}`,
        method: "GET",
      }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  useEffect(() => {
    if (isSuccess && !data) {
      toast.error("세션 정보를 찾지 못했습니다.");
    }

    if (isError && error) {
      if (error instanceof HttpError) {
        const { status } = error;

        if (status === 400) {
          toast.error("유저 아이디를 확인해주세요.");
        }

        if (status === 500) {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
        }
      } else if (error instanceof Error) {
        const { name, message } = error;

        toast.error(`${name}: ${message}`);
      } else {
        toast.error("예기치 못한 오류입니다.");
      }
    }
  }, [isSuccess, isError]);

  if (isLoading) return <UserSessionLogsSkeleton />;

  if (!data) return null;

  return (
    <div className={styles.session}>
      <h1 className={styles.sessionTitle}>최근 로그인</h1>
      <div className={styles.sessionTextWrap}>
        <span>{formatDate(data)}</span>
      </div>
    </div>
  );
}

export const UserSessionLogsSkeleton = () => {
  return (
    <div className={styles.session}>
      <Skeleton className={cn("skeleton", styles.titleSkeleton)} />
      <div className={styles.sessionTextWrap}>
        <Skeleton className={cn("skeleton", styles.sessionTextSkeleton)} />
      </div>
    </div>
  );
};
