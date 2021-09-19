import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import LandingPage from './pages/LandingPage'
import Settings from './pages/settings'

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
      <Route path="/settings" exact>
        <Settings />
      </Route>
    </Switch>
  </BrowserRouter>
)
export default App
