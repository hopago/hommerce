import { useCallback, useEffect, useMemo, useState } from "react";

import { MenuListTitle } from "../types/menu-list";
import { IUser } from "../types/user";

import { useRouter } from "next/navigation";

import debounce from "lodash.debounce";

import { useQuery } from "@tanstack/react-query";
import { fetchUserBySearchTerm } from "../services/fetchUser";
import { daysToMs } from "../utils/daysToMs";
import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { useHandleError } from "../users/management/[username]/hooks/use-handle-error";
import { useDebouncedSearch } from "./use-debounced-search";
import { fetchBookBySearchTerm } from "../books/services/fetchBookBySearchTerm";
import { BookFilterOption } from "../books/_components/FilterBooks";

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
    "도서 정보 수정": () => {
      setSearchTerm("");
      router.push("/books/edit");
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

export const useSearchUserForm = () => {
  const queryClient = getQueryClient();

  const { debouncedSearchTerm, searchTerm, setSearchTerm, handleChange } =
    useDebouncedSearch();

  const {
    data: searchResults,
    error,
    isError,
    isLoading,
  } = useQuery<IUser[]>({
    queryKey: [QueryKeys.USER_SEARCH, debouncedSearchTerm],
    queryFn: () => fetchUserBySearchTerm({ searchTerm: debouncedSearchTerm }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
    enabled: !!debouncedSearchTerm,
  });

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      queryClient.resetQueries({
        queryKey: [QueryKeys.USER_SEARCH, debouncedSearchTerm],
      });
    }
  }, [debouncedSearchTerm]);

  useHandleError({ error, isError, fieldName: "유저" });

  return {
    searchTerm,
    setSearchTerm,
    handleChange,
    isLoading,
    searchResults,
    error,
  };
};

export const useSearchBookForm = ({ filter }: { filter: BookFilterOption }) => {
  const { debouncedSearchTerm, searchTerm, setSearchTerm, handleChange } =
    useDebouncedSearch();

  const {
    data: searchResults,
    error,
    isError,
    isLoading,
  } = useQuery<BookData>({
    queryKey: [QueryKeys.USER_SEARCH, filter, debouncedSearchTerm],
    queryFn: () =>
      fetchBookBySearchTerm({ filter, searchTerm: debouncedSearchTerm }),
    staleTime: daysToMs(5),
    gcTime: daysToMs(7),
    enabled: !!debouncedSearchTerm,
  });

  useHandleError({ error, isError, fieldName: "도서" });

  return {
    searchTerm,
    setSearchTerm,
    handleChange,
    isLoading,
    searchResults: searchResults?.books,
    error,
  };
};
