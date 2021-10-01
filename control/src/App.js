import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import SignOut from './pages/signout/index'
import Workspace from './pages/workspace/components/Workspace'
import LandingPage from './pages/LandingPage'
// password block
import ResetPassword from './pages/passwordReset/index'
import NewPassword from './pages/passwordReset/newPassword'
// end password block
import CookiesSetting from './pages/cookiesSettings'
import Cookies from './pages/cookies'
import Features from './pages/features'
import Resources from './pages/resources'
import Pricing from './pages/pricing'
import Security from './pages/security'
import Invite from './pages/inviteScreen'
import Inviterequest from './pages/InviteRequest/InviteRequest'
import SendRequest from './pages/InviteRequest/SendRequest'
import ContactUs from './pages/contact-us'
import AppsAndIntegrations from './pages/apps-integration'
import Download from './pages/download'
import DownloadsMac from './pages/download/DownloadsMac'
import Careers from './pages/careers'
import MarketPlace from './pages/marketplace/marketplace'
import Settings from './pages/settings'
import ConfirmPassword from './pages/settings/components/ConfirmPassword'
import AccDeactivated from './pages/settings/components/AccDeactivated'
import DeactivateAccount from './pages/settings/components/AcctDeactivation'
import AllSessionSignOut from './pages/settings/components/AllSessionSignOut'
import PrivateRoute from './pages/settings/Utils/PrivateRoute'
import ConfirmDeactivation from './pages/settings/components/ConfirmDeactivation'
import CreateWorkSpaces from './pages/createworkspace/components/WorkSpaceContext'
import PrivacyPolicy from './pages/privacy-policy/index'
import NotFoundPage from './pages/404'
import About from './pages/about/index'
import Billing from './pages/admin/Billing'

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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/createworkspace">
          <CreateWorkSpaces />
        </Route>
        <Route path="/signout">
          <SignOut />
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
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/security">
          <Security />
        </Route>
        <Route path="/download-app">
          <Download />
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
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/marketplace" exact>
          <MarketPlace />
        </Route>
        <Route path="/apps-integrations">
          <AppsAndIntegrations />
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
        <PrivateRoute path="/admin/settings" exact component={Billing} />
        <PrivateRoute path="/settings/:id" component={ConfirmPassword} />
        {/* ----------------settings routes closed----------------- */}
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

        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
