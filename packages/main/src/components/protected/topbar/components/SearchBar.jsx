import styles from "../styles/SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search here"
      />
      <button>Search</button>
      <img src="/search-2-line.svg" className={styles.searchSvg} alt="search" />
    </div>
  );
};

export default SearchBar;
