import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
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
import FAQ from './pages/FAQ'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
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
      <Route path="/faq">
        <FAQ />
      </Route>
      <Route path="/input">
        <Input />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
