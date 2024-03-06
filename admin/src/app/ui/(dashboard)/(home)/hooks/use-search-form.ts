import { useEffect, useState } from "react";

import { MenuListTitle } from "../types/menu-list";
import { useRouter } from "next/navigation";

import debounce from "lodash.debounce";

type UseSearchProps = {
  type: MenuListTitle;
};

export function useNavigateForm({ type }: UseSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    [string, () => void][] | []
  >([]);

  const router = useRouter();

  // TODO: GET USER ID
  const userId = "clerk_id";

  const navigateFunctions: Record<MenuListTitle, () => void> = {
    대시보드: () => {
      setSearchTerm("");
      router.push("/");
    },
    유저: () => {
      setSearchTerm("");
      router.push("/users");
    },
    "도서 정보 및 리뷰": () => {
      setSearchTerm("");
      router.push("/books");
    },
    저자: () => {
      setSearchTerm("");
      router.push("/authors");
    },
    세부정보: () => {
      setSearchTerm("");
      router.push("/books/details");
    },
    리뷰: () => {
      setSearchTerm("");
      router.push("/reviews");
    },
    서비스: () => {
      setSearchTerm("");
      router.push("/services");
    },
    장바구니: () => {
      setSearchTerm("");
      router.push("/cart");
    },
    위시리스트: () => {
      setSearchTerm("");
      router.push("/favor");
    },
    포인트: () => {
      setSearchTerm("");
      router.push("/points");
    },
    설정: () => {
      setSearchTerm("");
      router.push(`/settings/${userId}`);
    },
    도움말: () => {
      setSearchTerm("");
      router.push("/help");
    },
  };

  const handleSearch = debounce(() => {
    const results = Object.entries(navigateFunctions).filter(([key]) =>
      key.includes(searchTerm.trim())
    );
    setSearchResults(results);
  }, 100);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    if (!navigateFunctions[type]) {
      throw new Error(`Something went wrong in type: ${type}`);
    }

    return navigateFunctions[type]!();
  };

  useEffect(() => {
    if (searchTerm === "") return setSearchResults([]);

    handleSearch();
  }, [searchTerm]);

  return {
    searchTerm,
    handleChange,
    handleSubmit,
    searchResults,
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
