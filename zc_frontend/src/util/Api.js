import axios from 'axios'

const endpoint = 'https://api.zuri.chat/'

export const authAxios = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: {
      toString() {
        return `Bearer ${sessionStorage.getItem('token')}`
      }
    }
  }
})
