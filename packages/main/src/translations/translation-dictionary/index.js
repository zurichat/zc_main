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
import EditWorkspace from "./components/EditWorkspace";

import Subscribe from "./pages/Subscribe";
import whyzurichat from "./pages/whyzurichat";
import Cookies from "./pages/Cookies";
import ContactUs from "./pages/ContactUs";
import Plugins from "./pages/Plugins";
import Profile from "./pages/Profile";
import ModalComponent from "./components/ModalComponent";

import DownloadDesktop from "./pages/DownloadDesktop";
import DownloadMobile from "./pages/DownloadMobile";
import DownloadMac from "./pages/DownloadMac";
import DownloadIos from "./pages/DownloadIos";
import DownloadWindows from "./pages/DownloadWindows";

import Pricing from "./pages/Pricing";
import PrivacyPage from "./pages/PrivacyPolicy";

import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import NavBar from "./components/NavBar";
import WorkspaceChat from "./pages/WorkspaceChat";
import SideBar from "./components/SideBar";
import Download from "./pages/Download";
import DownloadDesktopSectionTwo from "./pages/DownloadDesktopSectionTwo";
import DownloadMobileSectionTwo from "./pages/DownloadMobileSectionTwo";
import ProfileMore from "./pages/ProfileMore";
import EditProfile from "./components/EditProfile";
import Help from "./pages/Help";

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
  ...Profile,
  ...TopBarModal,
  ...EditWorkspace,

  ...DownloadDesktop,
  ...DownloadMobile,
  ...DownloadMac,
  ...DownloadIos,
  ...DownloadWindows,
  ...ModalComponent,
  ...Help,

  ...Pricing,
  ...PrivacyPage,
  ...DownloadDesktopSectionTwo,
  ...DownloadMobileSectionTwo,
  ...ProfileMore,

  // Components
  ...NavBar,
  ...Footer,
  ...WorkspaceChat,

  ...FAQ,

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
