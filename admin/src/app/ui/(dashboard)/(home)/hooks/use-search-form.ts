import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

import { MenuListTitle } from "../types/menu-list";
import { useRouter } from "next/navigation";

import debounce from "lodash.debounce";
import { restFetcher } from "@/app/fetcher/fetcher";

import { createQueryString } from "../utils/createQueryString";
import { IUser } from "../types/user";
import { HttpError } from "@/app/fetcher/error";
import { handleHttpError } from "@/app/fetcher/handle-error";

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

export function useSearchUserForm({ onError }: UseSearchUserFormParams) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<IUser[]>([]);

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    [searchTerm]
  );

  const handleSubmit = async () => {
    const queryString = createQueryString({ keyword: searchTerm });
    const url = `/user?${queryString}`;

    const data = await restFetcher<IUser[]>({ url, method: "GET" });

    return data;
  };

  const handleSearch = debounce(async () => {
    try {
      const results = await handleSubmit();

      if (results instanceof HttpError) {
        const httpError = results;
        const statusCode = httpError.status;

        if (statusCode === 500) {
          setError(true);
          setErrMsg("서버 오류입니다. 잠시 후 다시 시도해주세요.");
          onError(errMsg);
          return;
        }
      }

      setSearchResults(results as IUser[] | []);
    } catch (err) {
      handleHttpError({ err, setErrMsg, setError });
      onError(errMsg);
    }
  }, 500);

  useEffect(() => {
    setError(false);
    setErrMsg("");

    if (searchTerm === "") return setSearchResults([]);

    startTransition(() => {
      handleSearch();
    });
  }, [searchTerm]);

  return {
    searchTerm,
    handleChange,
    handleSubmit,
    isPending,
    searchResults,
    error,
  };
}
