import styles from "./search.module.css";

type SearchResultsProps = {
  searchResults: [string, () => void][] | [];
};

export default function SearchResults({ searchResults }: SearchResultsProps) {
  return (
    <ul className={styles.searchResults}>
      {searchResults.map(([key, value]) => (
        <div key={key} onClick={value} className={styles.searchItem}>
          {key}
        </div>
      ))}
    </ul>
  );
}
