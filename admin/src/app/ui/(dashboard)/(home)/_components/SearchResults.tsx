import { STYLE_NONE_BUTTON } from "../constants/classNames";
import styles from "./search.module.css";

type TSearchResult = [string, () => void] | undefined;

type SearchResultsProps = {
  searchResults: [string, () => void][] | [];
};

export default function SearchResults({ searchResults }: SearchResultsProps) {
  const renderItem = (item: TSearchResult) => {
    if (Array.isArray(item)) {
      const [key, value] = item;
      return (
        <li key={key} className={styles.searchItem}>
          <button className={STYLE_NONE_BUTTON} onClick={value}>
            {key}
          </button>
        </li>
      );
    } else {
      return null;
    }
  };

  return (
    <ul className={styles.searchResults}>{searchResults.map(renderItem)}</ul>
  );
}
