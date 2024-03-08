import { useCallback, useEffect, useMemo, useState } from "react";

import { MenuListTitle } from "../types/menu-list";

import { useRouter } from "next/navigation";

import debounce from "lodash.debounce";

import { useQuery } from "@tanstack/react-query";

import { HttpError } from "@/app/fetcher/error";

import { fetchUserBySearchTerm } from "../services/fetchUser";
import { IUser } from "../types/user";
import { daysToMs } from "../utils/daysToMs";
import useDebounce from "./use-debounce";

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

  const memoNavigateFunctions = useMemo(
    () => navigateFunctions,
    [navigateFunctions]
  );

  const handleSearch = debounce(() => {
    const results = Object.entries(memoNavigateFunctions).filter(([key]) =>
      key.includes(searchTerm.trim())
    );
    setSearchResults(results);
  }, 100);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    [searchTerm]
  );

  const handleSubmit = () => {
    if (!memoNavigateFunctions[type]) {
      throw new Error(`Something went wrong in type: ${type}`);
    }

    return memoNavigateFunctions[type]!();
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

type UseSearchUserFormParams = {
  onError: (message: string) => void;
};

export const useSearchUserForm = ({ onError }: UseSearchUserFormParams) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const debouncedSearchTerm = useDebounce({ value: searchTerm, delay: 750 });

  const {
    data: searchResults,
    error,
    isLoading,
  } = useQuery<IUser[]>({
    queryKey: ["userSearchResults", debouncedSearchTerm],
    queryFn: () => fetchUserBySearchTerm({ searchTerm: debouncedSearchTerm }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
    enabled: !!debouncedSearchTerm,
  });

  useEffect(() => {
    if (error instanceof HttpError) {
      if (error.status === 404) return onError("유저를 찾지 못했습니다.");

      onError(`${error.status}: ${error.message}`);
    } else if (error) {
      onError("예기치 못한 오류입니다.");
    }
  }, [error]);

  return {
    searchTerm,
    handleChange,
    isLoading,
    searchResults,
    error,
  };
};
