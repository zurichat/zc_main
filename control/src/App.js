import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import Workspace from './pages/workspace/components/Workspace'
import LandingPage from './pages/LandingPage'
import ResetPassword from './pages/passwordReset'
import CookiesSetting from './pages/cookiesSettings'
import Cookies from './pages/cookies'
import Features from './pages/features'
import Resources from './pages/resources'
import Pricing from './pages/pricing'
import Security from './pages/security'
import ContactUs from './pages/contact-us'
import AppsAndIntegrations from './pages/apps-integration'
import Events from './pages/events/components/EventsMainWrapper'
import Download from './pages/download'
import Careers from './pages/careers'
import MarketPlace from './pages/marketplace/marketplace'
import Blogs from './pages/blogs'
import Settings from './pages/settings'
import ConfirmPassword from './pages/settings/components/ConfirmPassword'
import AccDeactivated from './pages/settings/components/AccDeactivated'
import DeactivateAccount from './pages/settings/components/AcctDeactivation'
import AllSessionSignOut from './pages/settings/components/AllSessionSignOut'
import PrivateRoute from './pages/settings/Utils/PrivateRoute'
import ConfirmDeactivation from './pages/settings/components/ConfirmDeactivation'

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
      <Route path="/choose-workspace">
        <Workspace />
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
      <Route path="/security">
        <Security />
      </Route>
      <Route path="/events">
        <Events />
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
      {/* ----------------settings routes opened------------------------ */}
      <PrivateRoute
        path="/confirm-deactivation"
        component={ConfirmDeactivation}
      />
      <Route path="/account-deactivated">
        <AccDeactivated />
      </Route>
      <PrivateRoute path="/deactivate-account" component={DeactivateAccount} />
      <PrivateRoute path="/session-signout" component={AllSessionSignOut} />
      <PrivateRoute path="/settings" exact component={Settings} />
      <PrivateRoute path="/settings/:id" component={ConfirmPassword} />
      {/* ----------------settings routes closed----------------- */}
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
