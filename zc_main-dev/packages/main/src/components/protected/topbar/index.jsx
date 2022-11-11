// Components || Assets || Contexts
import TopNavbar from "./components/TopNavbar";
import { ProfileProvider } from "./context/profile-modal.context";
import { TopbarProvider } from "./context/topbar.context";

const TopNavBar = () => {
  return (
    <ProfileProvider>
      <TopbarProvider>
        <TopNavbar />
      </TopbarProvider>
    </ProfileProvider>
  );
};

// const mapStateToProps = state => ({
//   userProfile: state
// })

export default TopNavBar;
