import { cn } from "@/app/ui/lib/utils";
import { IUser } from "../../types/user";
import { checkValidResponse } from "../../utils/checkValidResponse";

import SearchResultItem from "./SearchResultItem";

import styles from "./search-results.module.css";

import { FaSpinner } from "react-icons/fa";

type SearchProps = {
  search: IUser[];
  isLoading: boolean;
};

function Loading() {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.loadingIcon} />
      <span>데이터를 불러오는 중입니다.</span>
    </div>
  );
}

function NoResults() {
  return (
    <div className={styles.spinner}>
      <span>검색 결과가 없습니다.</span>
    </div>
  );
}

function ResultList({ users }: { users: IUser[] }) {
  return (
    <ul className={styles.listContainer}>
      {users.map((user) => (
        <SearchResultItem key={user.username} user={user} />
      ))}
    </ul>
  );
}

export default function SearchResultList({ search, isLoading }: SearchProps) {
  function getSearchResult() {
    if (isLoading) return <Loading />;
    if (Array.isArray(search) && !search.length) return <NoResults />;
    if (checkValidResponse(search)) return <ResultList users={search} />;
    return null;
  }

  return (
    <div className={cn(styles.container, (isLoading || search) && styles.show)}>
      {getSearchResult()}
    </div>
  );
}
