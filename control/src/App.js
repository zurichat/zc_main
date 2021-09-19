import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import LandingPage from './pages/LandingPage'
import Settings from './pages/settings'
import ConfirmPassword from './pages/settings/components/ConfirmPassword'
import AccDeactivated from './pages/settings/components/AccDeactivated'
import ConfirmDeactivation from './pages/settings/components/AcctDeactivation'
import DeactivateAccount from './pages/settings/components/AccDeactivated'
import AllSessionSignOut from './pages/settings/components/AllSessionSignOut'
import ResetPassword from './pages/passwordReset'
import CookiesSetting from './pages/cookiesSettings'
import Cookies from './pages/cookies'

const App = () => (
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
      {/* <Route path="/features">
          <Features />
        </Route> */}
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
