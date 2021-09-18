import { useState } from 'react'
import styles from '../styles/SearchResults3.module.css'

const data = [
  { content: 'ALL' },
  { content: 'RESOURCES' },
  { content: 'BLOG' },
  { content: 'HELP CENTRE' },
  { content: 'PLATFORM' },
  { content: 'PRIVACY POLICY' },
  { content: 'MORE' }
]

const Headings = ({ content }) => (
  <div className={styles.heading}>{content}</div>
)

const SearchResults3 = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const onChange = ({ target }) => {
    const { value } = target
    setSearchTerm(value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <form>
            <input type="text" value={searchTerm} onChange={onChange} />
          </form>
        </div>
        <div className={styles.headings}>
          {data.map((item, index) => (
            <Headings {...item} key={index} />
          ))}
        </div>
        <div className={styles.results}>
          <div>
            Your search <span className={styles.bold}>{searchTerm}</span> did
            not match any answers we have.
          </div>

          <h4>Suggestions:</h4>
          <ul>
            <li>Make sure all words are spelled correctly.</li>
            <li>Try to ask your question a different way.</li>
            <li>Try more general words.</li>
            <li>Try fewer words.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchResults3
