import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null
  }
})

export const GetUserInfo = ({ userID, token }) => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    axios
      .get(`https://api.zuri.chat/users/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setUserData(res.data.data)
        console.log(userData)

        let dat = res.json
        console.log(dat)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <p>This is user...</p>
      <div>This is the user id {userID}</div>
      <div> this is the auth token {token}</div>
      {userData && (
        <div style={{ color: 'red' }}>user email {userData.email}</div>
      )}
    </div>
  )
}

export const { bootstrap, mount, unmount } = lifecycles
