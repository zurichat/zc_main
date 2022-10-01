import styles from "../styles/TopSearchBar.module.css";
const SearchBar = () => {
  return (
    <button className={styles.searchButton}>
      <p className={styles.placeHolder}>Search Here</p>
      {/* <img src="/search-2-line.svg"  alt="search" /> */}
    </button>
  );
};

export default SearchBar;
