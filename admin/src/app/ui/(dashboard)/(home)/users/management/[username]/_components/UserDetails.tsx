"use client";

import { useEffect } from "react";

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

export default function UserDetails() {
  const username = getUsernameByPath();

  const { data, isError, error, refetch, isRefetching, isRefetchError } =
    useQuery({
      queryKey: [QueryKeys.USER, username],
      queryFn: () => fetchUserBySearchTerm({ searchTerm: username }),
      staleTime: daysToMs(1),
      gcTime: daysToMs(3),
    });

  const isLoading = false;

  if (isLoading) return <UserDetailsSkeleton />;

  if (isError && isRefetchError)
    return <ApiRefetch refetch={refetch} isRefetching={isRefetching} />;

  useHandleError({ error, isError, isRefetchError });

  if (!data) return null;

  const user = data[0];

  return (
    <main className={styles.container}>
      <UserDetailsHeader />
      <div className={styles.contents}>
        <div className={styles.contentsWrap}>
          <UserProfile imageUrl={user.imageUrl} username={user.username} />
          <UserDetailsInfo
            grade={user.grade}
            username={user.username}
            email={user.email}
            status={user.status}
            createdAt={user.createdAt}
          />
        </div>
      </div>
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
