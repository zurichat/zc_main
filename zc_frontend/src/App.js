import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Features from './pages/features'
import FAQ from './pages/FAQ'
import './styles/globals.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/faq">
        <FAQ />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
