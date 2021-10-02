import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

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
      <p>{t('isUser')}</p>
      <div>
        {t('isUserId')} {userID}
      </div>
      <div>
        {t('isAuthToken')}
        {token}
      </div>
      {userData && (
        <div style={{ color: 'red' }}>
          {t('userEmail')} {userData.email}
        </div>
      )}
    </div>
  )
}

export const { bootstrap, mount, unmount } = lifecycles
