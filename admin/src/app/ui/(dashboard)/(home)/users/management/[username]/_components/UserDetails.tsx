"use client";

import { useQuery } from "@tanstack/react-query";
import ApiRefetch from "../../../../@modal/api-refetch/ApiRefetch";
import { fetchUserBySearchTerm } from "../../../../services/fetchUser";

import { useHandleError } from "../hooks/use-handle-error";

import { getUsernameByPath } from "../utils/getUsernameByPath";
import { daysToMs } from "../../../../utils/daysToMs";

import styles from "./user-details.module.css";

import UserProfile, { UserProfileSkeleton } from "./UserProfile";
import UserDetailsHeader, {
  UserDetailsHeaderSkeleton,
} from "./UserDetailsHeader";
import UserDetailsInfo, { UserDetailsInfoSkeleton } from "./UserDetailsInfo";

import { QueryKeys } from "@/app/lib/getQueryClient";
import { useMemo } from "react";

export default function UserDetails() {
  const username = getUsernameByPath();

  const {
    data,
    error,
    refetch,
    isError,
    isRefetching,
    isRefetchError,
    isLoading,
  } = useQuery({
    queryKey: [QueryKeys.USER, username],
    queryFn: () => fetchUserBySearchTerm({ searchTerm: username }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  if (isLoading) return <UserDetailsSkeleton />;

  useHandleError({ error, isError, isRefetchError });

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
      </div>
    </div>
  </div>
);
