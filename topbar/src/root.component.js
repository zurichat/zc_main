import { TopbarProvider } from "./context/Topbar"
import { ProfileProvider } from "./context/ProfileModal"
import TopNavBar from "./TopNavBar"
// import Topbar from './Topbar'

export default function Root() {
  return (
      <ProfileProvider>
        <TopbarProvider>
          <TopNavBar />
        </TopbarProvider>
      </ProfileProvider>
  )
}

// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>
// }
