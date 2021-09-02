<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Blog from './pages/blog';
import News from './pages/news';
import Download from './pages/download';
import './styles/globals.css';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
>>>>>>> 13c9efe0800025b30df1420999e6ad25feff594b

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
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
      <Route path="/app-download">
        <Download />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
