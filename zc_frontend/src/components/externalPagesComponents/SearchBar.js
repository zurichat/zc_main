import styles from '../../styles/SearchBar.module.css'
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        className={styles.searchInput}
        placeholder="Search here"
      />
      <img src="/search-2-line.svg" className={styles.searchSvg} alt="search" />
    </div>
  )
}

export default SearchBar
