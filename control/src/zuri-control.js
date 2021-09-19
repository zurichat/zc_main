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

export const GetUserInfo = ({ userID = "61437054d0284bc6a922346b", token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFl6TWpBek9UWTVNbnhIZDNkQlIwUlplRTVFVFROTlJGVXdXa1JCZVU5RVVtbFplbHBvVDFSSmVVMTZVVEpaWnowOWZBbXRlXzVuVUN5b2tfdmItaURmNHhfQkZjQXpRTUhYQThDUm51LUxxRjJRIiwiZW1haWwiOiJ0ZXN0MkBnbWFpbC5jb20iLCJpZCI6IjYxNDM3MDU0ZDAyODRiYzZhOTIyMzQ2YiIsIm9wdGlvbnMiOnsiUGF0aCI6Ii8iLCJEb21haW4iOiIiLCJNYXhBZ2UiOjYzMDcyMDAwMDAsIlNlY3VyZSI6ZmFsc2UsIkh0dHBPbmx5IjpmYWxzZSwiU2FtZVNpdGUiOjB9LCJzZXNzaW9uX25hbWUiOiJmNjgyMmFmOTRlMjliYTExMmJlMzEwZDNhZjQ1ZDVjNyJ9.MLA-teUt0AN6nYzMYa6KkCTu5mKI8W1bSjsG34a0VAo"}) => {

  // let user = JSON.parse(sessionStorage.getItem('user'))
  // let token = sessionStorage.getItem('token')
  // let sessionId = sessionStorage.getItem('session_id')

  // console.log(user)
  // console.log( token)
  // console.log(sessionId)

  const [userData, setUserData] = useState();

    axios
      .get(`https://api.zuri.chat/users/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      .then((res) => {
        setUserData(res.data.data);
        console.log(userData);

        let dat = res.json;
        console.log(dat);

      })
      .catch(err => console.log(err));

  return token
}

export const { bootstrap, mount, unmount } = lifecycles
