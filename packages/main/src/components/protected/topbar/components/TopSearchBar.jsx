import styles from "../styles/TopSearchBar.module.css";
const SearchBar = () => {
  return (
    <div>
      <button className={styles.searchButton}>
        <p className={styles.placeHolder}>Search Here</p>
        {/* <img src="/search-2-line.svg"  alt="search" /> */}
      </button>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
