import { useState } from "react";

import { MenuListTitle } from "../types/menu-list";
import { useRouter } from "next/navigation";

type UseSearchProps = {
  type: MenuListTitle;
};

export function useNavigateForm({ type }: UseSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  // TODO: GET USER ID

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const navigateFunctions: Record<MenuListTitle, () => void> = {
    대시보드: () => router.push("/dashboard"),
    유저: () => router.push("/user"),
    "도서 정보 및 리뷰": () => router.push("/books"),
    저자: () => router.push("/author"),
    세부정보: () => router.push("/books/details"),
    리뷰: () => router.push("/reviews"),
    서비스: () => router.push("/services"),
    장바구니: () => router.push("/cart"),
    위시리스트: () => router.push("/favor"),
    포인트: () => router.push("/points"),
    설정: () => router.push("/settings/:userId"),
    도움말: () => router.push("/help"),
  };

  const handleSubmit = () => {
    if (!navigateFunctions[type]) {
      throw new Error(`Something went wrong in type: ${type}`);
    }

    return navigateFunctions[type]!();
  };

  return {
    searchTerm,
    handleChange,
    handleSubmit,
  };
}

// TODO: Use searchUserForm
export function useSearchUserForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {};

  return {
    searchTerm,
    handleChange,
    handleSubmit,
  };
}
