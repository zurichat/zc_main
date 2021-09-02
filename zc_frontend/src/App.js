import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
// import Blog from './pages/blog'
// import News from './pages/news'
import './styles/globals.css'
<<<<<<< HEAD
import 'tailwindcss/tailwind.css'
=======
// import 'tailwindcss/tailwind.css'
import Security from './pages/security'
import Features from './pages/features'
import Resources from './pages/resources'
import AppsAndIntegrations from './pages/apps-integrations'
import Careers from './pages/careers'
import Download from './pages/download'
import ContactUs from './pages/contact-us'
import Pricing from './pages/pricing'
<<<<<<< HEAD
>>>>>>> 17c29f43419c9fba4fb0fee35f9125fee2241a9c
=======
>>>>>>> 17c29f43419c9fba4fb0fee35f9125fee2241a9c

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
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
>>>>>>> 17c29f43419c9fba4fb0fee35f9125fee2241a9c
=======
>>>>>>> 17c29f43419c9fba4fb0fee35f9125fee2241a9c
    </Switch>
  </BrowserRouter>
)

export default App
