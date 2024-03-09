"use client";

import { useQuery } from "@tanstack/react-query";
import ApiRefetch from "../../../../@modal/api-refetch/ApiRefetch";
import { fetchUserBySearchTerm } from "../../../../services/fetchUser";

import { useHandleError } from "../hooks/use-handle-error";

import { getUsernameByPath } from "../utils/getUsernameByPath";
import { daysToMs } from "../../../../utils/daysToMs";

import styles from "./user-details.module.css";

import UserProfile from "./UserProfile";
import UserDetailsHeader from "./UserDetailsHeader";
import UserDetailsInfo from "./UserDetailsInfo";

import { QueryKeys } from "@/app/lib/getQueryClient";

// TODO: 상세 로딩 스켈레톤, 전체 스켈레톤, 에러 모달

// 유저 상세 로딩
const UserLoading = () => {
  return <div className={styles.container}>유저 로딩</div>;
};

export default function UserDetails() {
  const username = getUsernameByPath();

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery({
    queryKey: [QueryKeys.USER, username],
    queryFn: () => fetchUserBySearchTerm({ searchTerm: username }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  if (isLoading) return <UserLoading />;

  if (isError && !isRefetching) return <ApiRefetch refetch={refetch} />;

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

// 첫 화면 로딩
UserDetails.Skeleton = () => <div>Loading...</div>;
