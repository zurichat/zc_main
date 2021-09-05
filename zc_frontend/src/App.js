import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Loading from './components/Loading/loading'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import './styles/globals.css'
// import 'tailwindcss/tailwind.css'
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
import Cookies from './pages/cookies'

import DeactivateAccount from './pages/settings/components/AcctDeactivation'
import CookiesSetting from './pages/cookies-settings'
import SearchResults3 from './components/SearchResults3'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/loading">
        <Loading />
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
      <Route path="/settings">
        <Settings />
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
      <Route path="/search-results">
        <SearchResults3 />
      </Route>
      <Route path="/link">
        <LinkComponent
          title={`test-to-home`}
          to={`/home`}
          color={`black`}
          underline
        />
      </Route>
    </Switch>
  </BrowserRouter>
)
export default App
