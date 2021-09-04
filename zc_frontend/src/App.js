import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Blog from './pages/blog';
import News from './pages/news';
import './styles/globals.css';
import InvitationAcceptance from './components/InvitationAcceptance';

const App = () => (
  <BrowserRouter>
    <InvitationAcceptance/>
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
);

export default App;
