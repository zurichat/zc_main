import styles from '../../styles/SearchBar.module.css'
import searchIcon from "../../assets/search-2-line.svg"
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search here"
      />
      <img src={searchIcon} className={styles.searchSvg} alt="search" />
    </div>
  )
}

export default SearchBar
