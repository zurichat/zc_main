import { useEffect, useState } from 'react'
import axios from 'axios'

const fetcher = url => {
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const fetchInfo = async () => {
    try {
      await setLoading(true)
      await setError(false)
      const res = await axios.get(url)
      await setList(res.data)
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return [isloading, error, list]
}

export default fetcher
