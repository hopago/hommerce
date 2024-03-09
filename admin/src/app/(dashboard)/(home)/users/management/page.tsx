"use client";

import { useManageUsers } from "@/app/store/use-manage-users";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

export default function UserManagement() {
  const { usernames } = useManageUsers();

  const router = useRouter();

  if (!usernames || !usernames.length) {
    toast.message("선택된 유저가 없습니다.");
    router.back();
    return null;
  }

  router.push(`/users/management/${usernames![0]}`);

  return null;
}
