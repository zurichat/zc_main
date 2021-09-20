import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import EmailVerification from './pages/email-verify'
import './styles/globals.css'
import Security from './pages/security'
import Features from './pages/features'
import Resources from './pages/resources'
import AppsAndIntegrations from './pages/apps-integrations'
import Careers from './pages/careers'
import Download from './pages/download'
import ContactUs from './pages/contact-us'
import Pricing from './pages/pricing'
import Header from './components/externalPagesComponents/Header'
import Input from './components/externalPagesComponents/Input'
// import CookiesBanner from './components/externalPagesComponents/CookiesBanner/cookiesBanner'
import FAQ from './pages/FAQ'
import './styles/globals.css'
import MarketPlace from './pages/marketplace/marketplace'
import Settings from './pages/settings'
import SearchResult from './components/SearchResults3'
import LinkComponent from './components/externalPagesComponents/Link'
import SearchSuggestion from './pages/searchSuggestion'
import Cookies from './pages/cookies'

import DeactivateAccount from './pages/settings/components/AcctDeactivation'
import CookiesSetting from './pages/cookies-settings'
import SearchResults2 from './components/externalPagesComponents/searchResults2'
import ConfirmPassword from './pages/settings/components/ConfirmPassword'
import ApiDocs from './pages/api-docs'

import AllSessionSignOut from './pages/settings/components/AllSessionSignOut'
import AccountReset from './pages/settings/components/AccountReset'

import ConfirmDeactivation from './pages/settings/components/ConfirmDeactivation'
import AccDeactivated from './pages/settings/components/AccDeactivated'
import { TopbarProvider } from './context/Topbar'

import '@reach/dialog/styles.css'

import { PluginLoaderProvider } from './context/PluginLoaderState'
import UsersApi from './pages/api-docs/components/users'
import OrganisationApi from './pages/api-docs/components/organisation'
import MarketplaceApi from './pages/api-docs/components/marketplace'
import DataApi from './pages/api-docs/components/data'
import PluginApi from './pages/api-docs/components/plugin'

import '@reach/dialog/styles.css'
import StyleGuide from './components/verified/StyleGuide'
import RecoveryEmail from './pages/passwordRecovery/index'
import ResetPassword from './pages/passwordReset/Index'
import Workspace from './components/Workspace/components/Workspace'

const App = () => (
  <TopbarProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/choose-workspace">
          <Workspace />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/verify-email">
          <EmailVerification />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/security">
          <Security />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/apps-integrations">
          <AppsAndIntegrations />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/download-app">
          <Download />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/marketplace" exact>
          <MarketPlace />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/input">
          <Input />
        </Route>
        <Route path="/settings" exact>
          <Settings />
        </Route>
        <Route path="/settings/:id">
          <ConfirmPassword />
        </Route>
        <Route path="/search">
          <SearchResult />
        </Route>
        <Route path="/cookies-banner">
          <Cookies />
        </Route>
        <Route path="/cookies-settings">
          <CookiesSetting />
        </Route>
        <Route path="/deactivate-account">
          <DeactivateAccount />
        </Route>
        <Route path="/session-signout" exact>
          <AllSessionSignOut />
        </Route>
        <Route path="/session-signout/:id">
          <AccountReset />
        </Route>
        <Route path="/search-results">
          <SearchResults2 />
        </Route>
        <Route path="/search-suggestions">
          <SearchSuggestion />
        </Route>

        {/* Api docs */}
        <Route exact path="/documentation/users">
          <UsersApi />
        </Route>
        <Route path="/documentation/organisation">
          <OrganisationApi />
        </Route>
        <Route path="/documentation/marketplace">
          <MarketplaceApi />
        </Route>
        <Route path="/documentation/data">
          <DataApi />
        </Route>
        <Route path="/documentation/plugin">
          <PluginApi />
        </Route>
        <Route path="/link">
          <LinkComponent
            title={`test-to-home`}
            to={`/home`}
            color={`black`}
            underline
          />
        </Route>
        <Route path="/documentation" exact>
          <PluginLoaderProvider>
            <ApiDocs />
          </PluginLoaderProvider>
        </Route>
        <Route path="/confirm-deactivation">
          <ConfirmDeactivation />
        </Route>
        <Route path="/account-deactivated">
          <AccDeactivated />
        </Route>
        <Route path="/recover-email">
          <RecoveryEmail />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/style-guide">
          <StyleGuide />
        </Route>
      </Switch>
    </BrowserRouter>
  </TopbarProvider>
)
export default App
