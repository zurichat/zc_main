import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import LandingPage from './pages/LandingPage'
import InviteRequest from './pages/InviteRequest'
import SendRequest from './pages/SendRequest'
import Settings from './pages/settings'
import ConfirmPassword from './pages/settings/components/ConfirmPassword'
import AccDeactivated from './pages/settings/components/AccDeactivated'
import ConfirmDeactivation from './pages/settings/components/AcctDeactivation'
import DeactivateAccount from './pages/settings/components/AccDeactivated'
import AllSessionSignOut from './pages/settings/components/AllSessionSignOut'
import ResetPassword from './pages/passwordReset'
import CookiesSetting from './pages/cookiesSettings'
import Cookies from './pages/cookies'
import Features from './pages/features'
import Resources from './pages/resources'
import Pricing from './pages/pricing'
import Security from './pages/security'
import ContactUs from './pages/contact-us'
import AppsAndIntegrations from './pages/apps-integration'
import { PluginLoaderProvider } from './context/PluginLoaderState'
import Download from './pages/download'
import Careers from './pages/careers'
import MarketPlace from './pages/marketplace/marketplace'
import Blogs from './pages/blogs'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/blogs">
        <Blogs />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
      <Route path="/resources">
        <Resources />
      </Route>
      <Route path="/pricing">
        <Pricing />
      </Route>
      <Route path="/InviteRequest">
        < InviteRequest/>
      </Route>
      <Route path="/SendRequest">
        <SendRequest />
      </Route>
      <Route path="/security">
        <Security />
      </Route>
      <Route path="/download-app">
        <Download />
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
      <Route path="/careers">
        <Careers />
      </Route>
      <Route path="/marketplace" exact>
        <MarketPlace />
      </Route>
      <Route path="/apps-integrations">
        <AppsAndIntegrations />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/settings/:id">
        <ConfirmPassword />
      </Route>
      <Route path="/account-deactivated">
        <AccDeactivated />
      </Route>
      <Route path="/confirm-deactivation">
        <ConfirmDeactivation />
      </Route>
      <Route path="/deactivate-account">
        <DeactivateAccount />
      </Route>
      <Route path="/session-signout">
        <AllSessionSignOut />
      </Route>
      <Route path="/reset-password">
        <ResetPassword />
      </Route>
      <Route path="/cookies-settings">
        <CookiesSetting />
      </Route>
      <Route path="/cookies-banner">
        <Cookies />
      </Route>
    </Switch>
  </BrowserRouter>
)
export default App
