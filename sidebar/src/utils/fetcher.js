import { useEffect, useState } from 'react'
import axios from 'axios'

const endpoint = 'https://api.zuri.chat'

const fetcher = (url, token) => {
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  // const { token } = JSON.parse(sessionStorage.getItem('user'))

  const authAxios = axios.create({
    baseURL: endpoint,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const fetchInfo = async () => {
    try {
      await setLoading(true)
      await setError(false)
      // await token
      // const res = await axios.create({
      //   baseURL: url,
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // })
      const res = await authAxios.get(url)
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
