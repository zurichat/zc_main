import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Blog from './pages/blog';
import News from './pages/news';
import './styles/globals.css';
import MarketPlace from './pages/marketplace/marketplace';
import PluginDetails from './pages/marketplace/PluginDetails'

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
      <Route path="/marketplace" exact>
        <MarketPlace />        
      </Route>
      <Route path="/marketplace/plugins/:pluginId/:pluginName" exact>
        <PluginDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
