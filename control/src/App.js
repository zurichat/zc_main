import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import SignOut from "./pages/signout/index"
import Workspace from "./pages/workspace/components/Workspace"
import LandingPage from "./pages/LandingPage"
import DAO_Features from "./pages/DAO-Features"
// password block
import ResetPassword from "./pages/passwordReset/index"
import NewPassword from "./pages/passwordReset/newPassword"
// end password block

import CookiesSetting from "./pages/cookiesSettings"
import Cookies from "./pages/cookies"
import Features from "./pages/features"
import Resources from "./pages/resources"
import Help from "./pages/Help"
import Pricing from "./pages/pricing"
import Security from "./pages/security"
import Invite from "./pages/inviteScreen"
import Inviterequest from "./pages/InviteRequest/InviteRequest"
import SendRequest from "./pages/InviteRequest/SendRequest"
import ContactUs from "./pages/contact-us"
import Search from "./pages/search"
import AppsAndIntegrations from "./pages/apps-integration"
import Download from "./pages/download"
import DownloadsMac from "./pages/download/DownloadsMac"
import Careers from "./pages/careers"
import MarketPlace from "./pages/marketplace/marketplace"
import Settings from "./pages/settings"
import ConfirmPassword from "./pages/settings/components/ConfirmPassword"
import AccDeactivated from "./pages/settings/components/AccDeactivated"
import DeactivateAccount from "./pages/settings/components/AcctDeactivation"
import AllSessionSignOut from "./pages/settings/components/AllSessionSignOut"
import PrivateRoute from "./pages/settings/Utils/PrivateRoute"
import ConfirmDeactivation from "./pages/settings/components/ConfirmDeactivation"
import CreateWorkSpaces from "./pages/createworkspace/components/WorkSpaceContext"
import PrivacyPolicy from "./pages/privacy-policy/index"
import NotFoundPage from "./pages/404"
import Billing from "./pages/admin/Billing"
import Customize from "./pages/admin/Customize"
import Deprecation from "./pages/admin/Deprecation"
import UserGroups from "./pages/admin/UserGroups"
import Blog from "./pages/blogs"
import Homepage from "./pages/home"
// import Permissions from "./pages/admin/Permissions"
import SettingsHome from "./pages/admin/Settings/index"
import About from "./pages/about/index"
import AdminSettingsTab from "./pages/admin/Settings/components/AdminSettingsTab"
import TermsOfService from "./pages/termsOfService"
import RedirectRoute from "./pages/redirect"
import AnayticsHome from "./pages/admin/Analytics/index"
import Plugins from "./pages/plugins"
import Home from "./pages/admin/Settings/components/SettingsHome"
import AboutWorkSpace from "./pages/admin/AboutWorkSpace"
import adminNalytics from "./pages/admin/Settings/Member"
import AccountProfile from "./pages/admin/AccountProfile"
import Legal from "./pages/legal"
import ZurichatBlog from "./pages/blogs/components/zurichatBlog"

import ManageMembers from "./pages/admin/manage_members/components/ManageMembers"
import Ebooks from "./pages/ebooks"
import Invitation from "./pages/admin/Invitation"
import Whyzurichat from "./pages/WhyZuriChat/Whyzurichat"
import Gateways from "./pages/admin/gateways/components/gateways"
import OnboardingHelp from "./pages/LoginSignUpHelp/index"
import DeleteWorkspace from "./pages/settings/components/deleteWorkspace"
import BookDemo from "./pages/book-a-demo"

import ChangeWorkspaceName from "./pages/admin/Settings/components/ChangeWorkspaceName"
import BlogDetails from "./pages/blogs/components/BlogDetails"
import CreateBlog from "./pages/blogs/components/CreateBlog.jsx"

// useEffect(() => {
//     localStorage.setItem('input',input);
// },[input]);

// const handleInputChange = (event) => {
//     setInput(event.target.value);
// }
// let workspaceRoute = '/createworkspace';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <RedirectRoute path="/login">
          <Login />
        </RedirectRoute>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/createworkspace">
          <CreateWorkSpaces />
        </Route>
        <Route path="/signout">
          <SignOut />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/choose-workspace">
          <Workspace />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/invites/:id">
          <Invite />
        </Route>
        <Route path="/invite-request">
          <Inviterequest />
        </Route>
        <Route path="/send-request">
          <SendRequest />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/createBlog">
          <CreateBlog />
        </Route>
        <Route path="/blog/:title">
          <BlogDetails />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/plugins">
          <Plugins />
        </Route>
        <Route path="/security">
          <Security />
        </Route>
        <Route path="/downloads">
          <Download />
        </Route>
        <Route path="/ebooks">
          <Ebooks />
        </Route>
        <Route path="/downloadsMac">
          <DownloadsMac />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/terms">
          <TermsOfService />
        </Route>
        <Route path="/legal">
          <Legal />
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route path="/open-marketplace" exact>
          <MarketPlace />
        </Route>
        <Route path="/dao-features">
          <DAO_Features />
        </Route>

        <Route path="/troubleshooting/onboarding-help">
          <OnboardingHelp />
        </Route>

        {/* <Route path="/marketplace" exact>
          <MarketPlace />
        </Route> */}
        <Route path="/apps-integrations">
          <AppsAndIntegrations />
        </Route>
        <Route path="/ZurichatBlog">
          <ZurichatBlog />
        </Route>
        <Route path="/whyzurichat">
          <Whyzurichat />
        </Route>

        {/* ----------------settings routes opened------------------------ */}
        <PrivateRoute
          path="/confirm-deactivation"
          component={ConfirmDeactivation}
        />
        <Route path="/account-deactivated">
          <AccDeactivated />
        </Route>
        <PrivateRoute
          path="/deactivate-account"
          component={DeactivateAccount}
        />

        <PrivateRoute path="/session-signout" component={AllSessionSignOut} />
        <PrivateRoute path="/settings" exact component={Settings} />
        <PrivateRoute path="/admin/settings" exact component={SettingsHome} />
        <PrivateRoute path="/admin/settings/home" exact component={Home} />

        <PrivateRoute
          path="/admin/name"
          exact
          component={ChangeWorkspaceName}
        />
        <PrivateRoute path="/admin/delete" exact component={DeleteWorkspace} />
        <PrivateRoute path="/homepage/profile" exact component={Homepage} />
        <PrivateRoute path="/components/gateways" exact component={Gateways} />
        <PrivateRoute
          path="/admin/name"
          exact
          component={ChangeWorkspaceName}
        />
        <PrivateRoute
          path="/admin/settings/analytics/memmber"
          exact
          component={adminNalytics}
        />

        <PrivateRoute
          path="/admin/settings/billings"
          exact
          component={Billing}
        />
        <PrivateRoute path="/admin/stats" exact component={AnayticsHome} />
        <PrivateRoute
          path="/admin/settings/usergroups"
          exact
          component={UserGroups}
        />
        <PrivateRoute
          path="/admin/settings/customize"
          exact
          component={Customize}
        />
        <PrivateRoute
          path="/admin/settings/aboutworkspace"
          exact
          component={AboutWorkSpace}
        />
        <PrivateRoute
          path="/admin/settings/accountsProfile"
          exact
          component={AccountProfile}
        />
        {/* <PrivateRoute
          path="/admin/settings/permission"
          exact
          component={AdminSettingsTab}
        /> */}
        <Route
          path="/admin/settings/managemembers"
          exact
          component={ManageMembers}
        />

        <PrivateRoute path="/settings/:id" component={ConfirmPassword} />
        {/* ----------------settings routes closed----------------- */}
        <Route path="/admin/invites">
          <Invitation />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/change-password">
          <NewPassword />
        </Route>
        <Route path="/cookies-settings">
          <CookiesSetting />
        </Route>
        <Route path="/cookies-banner">
          <Cookies />
        </Route>
        <Route path="/book-a-demo">
          <BookDemo />
        </Route>

        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </BrowserRouter>
  )
}
export default App
