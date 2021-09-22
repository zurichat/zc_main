import { data } from 'autoprefixer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../../styles/SearchBar.module.css'
const SearchBar = () => {
  const [ APIData, setAPIData ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios.get(`https://goals.zuri.chat/api/v1/search/files?channelName=goals&fileName=o`)
         .then((response) => {
           setAPIData(response.data)
          
           
         })
  }, [])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
     const filteredData = APIData.filter((item) => {
       return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
       })
       setFilteredResults(filteredData)
    } else {
      setFilteredResults(APIData)
    }
}
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search here"
        onChange={(e) => searchItems(e.target.value)}
      />
      <img src="/search-2-line.svg" className={styles.searchSvg} alt="search" />
      <div>
      {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <li>
                               {item.goals}.{item.ChannelName}
                            </li>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <li>
                                 {item.goals}.{item.ChannelName}
                            </li>
                        )
                    })
                )}
      </div>
    </div>
  )
}

export default SearchBar;
