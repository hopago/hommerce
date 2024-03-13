import { BUTTON_CLASS } from "../constants/classNames";
import styles from "./search.module.css";

type TSearchResult = [string, () => void] | undefined;

type SearchResultsProps = {
  searchResults: [string, () => void][] | [];
};

export default function SearchResults({ searchResults }: SearchResultsProps) {
  const renderItem = (item: TSearchResult) => {
    if (Array.isArray(item)) {
      const [key, value] = item;
      console.log(key, value);
      return (
        <li key={key} className={styles.searchItem} onClick={value}>
          <button className={BUTTON_CLASS.STYLE_NONE}>
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
