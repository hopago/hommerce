"use client";

import { useMemo } from "react";

import { useQuery } from "@tanstack/react-query";
import ApiRefetch from "../../../../@modal/api-refetch/ApiRefetch";
import { fetchUserBySearchTerm } from "../../../../services/fetchUser";
import { QueryKeys } from "@/app/lib/getQueryClient";

import { useHandleError } from "../hooks/use-handle-error";

import { getUsernameByPath } from "../utils/getUsernameByPath";
import { daysToMs } from "../../../../utils/daysToMs";

import styles from "./user-details.module.css";

import UserProfile, { UserProfileSkeleton } from "./UserProfile";
import UserDetailsHeader, {
  UserDetailsHeaderSkeleton,
} from "./UserDetailsHeader";
import UserDetailsInfo, { UserDetailsInfoSkeleton } from "./UserDetailsInfo";
import UserLogs, { UserLogsSkeleton } from "./UserLogs";

export default function UserDetails() {
  const username = getUsernameByPath();

  const {
    data,
    error,
    refetch,
    isLoading,
    isError,
    isRefetching,
    isRefetchError,
  } = useQuery({
    queryKey: [QueryKeys.USER, username],
    queryFn: () => fetchUserBySearchTerm({ searchTerm: username }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  if (isLoading) return <UserDetailsSkeleton />;

  useHandleError({ error, isError, isRefetchError, fieldName: "유저" });

  if (!data) return null;

  const user = data[0];
  const memoUser = useMemo(() => user, [user]);

  return (
    <main className={styles.container}>
      <UserDetailsHeader />
      <div className={styles.contents}>
        <div className={styles.contentsWrap}>
          <UserProfile
            imageUrl={memoUser.imageUrl}
            username={memoUser.username}
          />
          <UserDetailsInfo
            grade={memoUser.grade}
            username={memoUser.username}
            email={memoUser.email}
            status={memoUser.status}
            createdAt={memoUser.createdAt}
          />
          <UserLogs
            userId={memoUser.id}
            createdAt={memoUser.createdAt}
            updatedAt={memoUser.updatedAt}
          />
        </div>
      </div>
      {isError && (
        <ApiRefetch
          isError={isError}
          refetch={refetch}
          isRefetching={isRefetching}
          isRefetchError={isRefetchError}
        />
      )}
    </main>
  );
}

export const UserDetailsSkeleton = () => (
  <div className={styles.container}>
    <UserDetailsHeaderSkeleton />
    <div className={styles.contents}>
      <div className={styles.contentsWrap}>
        <UserProfileSkeleton />
        <UserDetailsInfoSkeleton />
        <UserLogsSkeleton />
      </div>
    </div>
  </div>
);
