import axios from 'axios'

const fetchInstall = async type => {
  try {
    // const res = await axios.get("link to download url", {type})
    // const {link, name} = res.data
    // return {link, name}
    return { link: '/apk/appRelease.apk', name: 'Zuri Chat Windows' }
  } catch (err) {
    console.error(err)
  }
}

export default fetchInstall
