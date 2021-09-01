<<<<<<< HEAD
import PricingPageSection1 from './pages/pricing/pricingPageSection1/PricingPageSection1';

const App = () => (
	<PricingPageSection1 />
);
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Blog from './pages/blog'
import News from './pages/news'
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
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/news">
        <News />
      </Route>
    </Switch>
  </BrowserRouter>
)
>>>>>>> f39cddfcfbb4ff713091f10b2df89039c1e7bee1

export default App
