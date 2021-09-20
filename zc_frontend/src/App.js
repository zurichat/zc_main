import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import './styles/globals.css'
// import LandingPage from './components/LandingPage'
import Homepage from './components/Homepage'
//import EmailVerification from './pages/email-verify'
import Security from './pages/security'
import Features from './pages/features'
import Resources from './pages/resources'
import AppsAndIntegrations from './pages/apps-integrations'
import Careers from './pages/careers'
import Blogs from './pages/blogs'
import Download from './pages/download'
import ContactUs from './pages/contact-us'
import Pricing from './pages/pricing'
import Header from './components/externalPagesComponents/Header'
import './styles/globals.css'
import MarketPlace from './pages/marketplace/marketplace'
import Input from './components/externalPagesComponents/Input'
// import CookiesBanner from './components/externalPagesComponents/CookiesBanner/cookiesBanner'
import FAQ from './pages/FAQ'
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
import CreateWorkspace from './pages/create-workspace/CreateWorkSpace'
import ProjectName from './pages/create-workspace/ProjectName'
import LaunchPage from './pages/create-workspace/LaunchPage'

import '@reach/dialog/styles.css'
import StyleGuide from './components/verified'
import Test from './components/verified-components'
import RecoverPassword from './pages/passwordRecovery/index'
import ResetPassword from './pages/passwordReset/Index'
import PrivateRoute from './pages/settings/Utils/PrivateRoute'
import AuthApi from './pages/api-docs/components/auth'
import { useRouteMatch } from 'react-router-dom'
import './components/verified-components/master.css'
import CompanyName from './pages/create-workspace/CompanyName'
import Step3 from './pages/create-workspace/Step3'

const App = () => {
  let workspaceRoute = '/home/createworkspace'
  return (
    <TopbarProvider>
      <Switch>
        {/* <Route path="/" exact>
          <LandingPage />
        </Route> */}
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/home" exact>
          <Home />
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
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/security">
          <Security />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/apps-integrations">
          <AppsAndIntegrations />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path={workspaceRoute} exact>
          <CreateWorkspace />
        </Route>
        {/* <Route path = {`${match.path}/companyname`}>
          <CompanyName/>
          </Route> */}
        <Route path={`${workspaceRoute}/step1`} exact>
          <CompanyName />
        </Route>
        <Route path={`${workspaceRoute}/step1/step2`} exact>
          <ProjectName />
        </Route>
        <Route path={`${workspaceRoute}/step1/step2/step3`} exact>
          <Step3 />
        </Route>
        <Route path={`${workspaceRoute}/step1/step2/step3/launch`}>
          <LaunchPage />
        </Route>
        <Route path="/download-app">
          <Download />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/pricing">
          <Pricing />
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

        <Route path="/search">
          <SearchResult />
        </Route>
        <Route path="/cookies-banner">
          <Cookies />
        </Route>
        <Route path="/cookies-settings">
          <CookiesSetting />
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
        <Route exact path="/documentation/auth">
          <AuthApi />
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
        <Route path="searchSuggestion">
          <SearchSuggestion />
        </Route>
        <Route path="/documentation" exact>
          <PluginLoaderProvider>
            <ApiDocs />
          </PluginLoaderProvider>
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
        <PrivateRoute path="/settings/:id" component={ConfirmPassword} />
        {/* ----------------settings routes closed----------------- */}

        <Route path="/recover-email">{/* <RecoveryEmail /> */}</Route>
        <Route path="/recover-password">
          <RecoverPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/style-guide">
          <StyleGuide />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </TopbarProvider>
  )
}

export default App
