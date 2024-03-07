"use client";

import { useEffect } from "react";

import styles from "./users-table.module.css";

import Pagination from "../../_components/Pagination";
import UsersTableItem from "./UsersTableItem";

import { useCreatorPagination } from "@/app/store/use-pagination";

/* TODO:
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", postId],
    queryFn: () => getSinglePost({ postId: postId as string }),
  });
  await queryClient.prefetchQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments({ postId: postId as string }),
  });
  const dehydratedState = dehydrate(queryClient);
*/

export default function UsersTable() {
  const { currentPage } = useCreatorPagination();

  const temporaryUser: UserInfo = {
    _id: "mongo_id",
    username: "hopago",
    imageUrl: "/img_default-profile.png",
    email: "hopago@gmail.com",
    createdAt: new Date(),
    grade: "일반회원",
    status: "활성화",
  };

  const users = [...Array.from({ length: 10 })].map((_) => temporaryUser);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>성함</td>
            <td>이메일</td>
            <td>가입일</td>
            <td>등급</td>
            <td>상태</td>
            <td>관리</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <UsersTableItem key={`${user._id}-${i}`} user={user} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </>
  );
}
