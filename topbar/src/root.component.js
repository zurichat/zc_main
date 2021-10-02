import { Provider } from 'react-redux'
import React, { Suspense } from 'react'
import { store } from './redux/index'
import { TopbarProvider } from './context/Topbar'
import { ProfileProvider } from './context/ProfileModal'
import TopNavBar from './TopNavBar'
import { LanguageProvider } from './context/Language'
import '../../settings/config'

export default function Root() {
  return (
    <Provider store={store}>
      <ProfileProvider>
        <TopbarProvider>
          <TopNavBar />
        </TopbarProvider>
      </ProfileProvider>
    </Provider>
  )
}

// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>
// }
