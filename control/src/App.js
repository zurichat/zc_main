import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
// import './styles/globals.css'
import LandingPage from './pages/LandingPage'


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
      </Switch>
    </BrowserRouter>
)
export default App