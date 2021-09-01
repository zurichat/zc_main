import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Features from './pages/features'
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
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
