import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
