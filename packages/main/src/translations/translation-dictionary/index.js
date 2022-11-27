// Export all translations
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import ResetPassword from "./pages/ResetPassword";
import Workspace from "./pages/Workspace";
import UserOrganizationsListing from "./components/UserOrganizationsListing";
import TopBarModal from "./components/TopBarModal";
import Preferences from "./components/Preferences";

import Subscribe from "./pages/Subscribe";
import whyzurichat from "./pages/whyzurichat";
import Cookies from "./pages/Cookies";
import ContactUs from "./pages/ContactUs";
import Plugins from "./pages/Plugins";
import ModalComponent from "./components/ModalComponent";

import DownloadDesktop from "./pages/DownloadDesktop";
import DownloadMobile from "./pages/DownloadMobile";
import DownloadMac from "./pages/DownloadMac";
import DownloadIos from "./pages/DownloadIos";
import DownloadWindows from "./pages/DownloadWindows";

import Pricing from "./pages/Pricing";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import WorkspaceChat from "./pages/WorkspaceChat";
import SideBar from "./components/SideBar";
import Download from "./pages/Download";
import DownloadDesktopSectionTwo from "./pages/DownloadDesktopSectionTwo";
import DownloadMobileSectionTwo from "./pages/DownloadMobileSectionTwo";
import EditProfile from "./components/EditProfile";

const resources = {};

const Translations = [
  // Pages
  ...Home,
  ...About,
  ...Login,
  ...SignUp,
  ...whyzurichat,
  ...Subscribe,
  ...Cookies,
  ...ContactUs,
  ...SignOut,
  ...ResetPassword,
  ...Plugins,
  ...About,
  ...Download,
  ...Workspace,
  ...UserOrganizationsListing,
  ...TopBarModal,

  ...DownloadDesktop,
  ...DownloadMobile,
  ...DownloadMac,
  ...DownloadIos,
  ...DownloadWindows,
  ...ModalComponent,

  ...Pricing,
  ...DownloadDesktopSectionTwo,
  ...DownloadMobileSectionTwo,

  // Components
  ...NavBar,
  ...Footer,
  ...WorkspaceChat,
  ...SideBar,
  ...Preferences,
  ...EditProfile
];

Translations.forEach(o => {
  Object.keys(o).forEach(key => {
    let langCode = String;
    let langKey = String;
    let langKeyVal = String;

    if (key !== "key") {
      langCode = key;
      langKey = o.key;
      langKeyVal = o[key];

      if (resources[langCode] === undefined) {
        resources[langCode] = { translation: {} };
      }

      resources[langCode].translation[langKey] = langKeyVal;
    }
  });
});

export default resources;
