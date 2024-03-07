import { IUser } from "../types/user";

import UserResults from "./UserResults";

import styles from "./search.module.css";

type TSearchResult = [string, () => void] | IUser | undefined;

type SearchResultsProps = {
  searchResults: [string, () => void][] | [] | IUser[];
};

export default function SearchResults({ searchResults }: SearchResultsProps) {
  const renderItem = (item: TSearchResult) => {
    if (Array.isArray(item)) {
      const [key, value] = item;
      return (
        <li key={key} onClick={value} className={styles.searchItem}>
          {key}
        </li>
      );
    } else if (item && ("username" in item && "email" in item)) {
      return <UserResults key={item._id} user={item} />;
    } else {
      return null;
    }
  };

  return (
    <ul className={styles.searchResults}>{searchResults.map(renderItem)}</ul>
  );
}
