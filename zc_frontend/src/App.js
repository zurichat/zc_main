import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Resource from './pages/resources'
// import Blog from './pages/blog'
// import News from './pages/news'
import './styles/globals.css'
// import 'tailwindcss/tailwind.css'

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
      <Route path="/Resource">
        <Resource />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
