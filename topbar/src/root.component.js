import { TopbarProvider } from "./context/Topbar"
import { ProfileProvider } from "./context/ProfileModal"
import TopNavBar from "./TopNavBar"
import {ThemeProvider} from "./context/themeContext";
// import Topbar from './Topbar'

export default function Root() {
  return (
    <ProfileProvider>
      <TopbarProvider>
        <ThemeProvider>
          <TopNavBar />
        </ThemeProvider>
      </TopbarProvider>
    </ProfileProvider>
      
  )
}

// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>
// }
