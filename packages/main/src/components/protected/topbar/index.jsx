// Components || Assets || Contexts
import TopNavbar from "./components/TopNavbar";
import { ProfileProvider } from "./context/profile-modal.context";
import { TopbarProvider } from "./context/topbar.context";

const TopNavBar = ({ toggleSidebar }) => {
  return (
    <ProfileProvider>
      <TopbarProvider>
        <TopNavbar toggleSidebar={toggleSidebar} />
      </TopbarProvider>
    </ProfileProvider>
  );
};

// const mapStateToProps = state => ({
//   userProfile: state
// })

export default TopNavBar;
