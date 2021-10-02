import { useState, useEffect, useCallback, useRef } from 'react'
import { useFetch } from '../utils/useFetch'
import { useTranslation } from 'react-i18next'

export const AddRoomModal = () => {
  const url = 'https://jsonplaceholder.typicode.com/comments'
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const { loading, error, list } = useFetch(query, page, url)
  const loader = useRef(null)
  const { t } = useTranslation()
  const handleChange = e => setQuery(e.target.value)

  const handleObserver = useCallback(entries => {
    const target = entries[0]
    if (target.isIntersecting) return setPage(prev => prev + 1)
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  return (
    <div
      style={{
        position: 'fixed',
        top: '0px',
        height: '100vh',
        width: '100vw',
        background: 'rgba(0,0,0,0.2)'
      }}
    >
      <h1>{t('infinit')}</h1>
      <h2>{t('intersection')}</h2>
      <input type="text" value={query} onChange={handleChange} />
      <div>
        {list.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
      {loading && <p>{t('loading')}</p>}
      {error && <p>{t('error')}</p>}
      <div ref={loader} />
    </div>
  )
}
