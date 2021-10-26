import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { getCarsIndex } from './redux/cars/cars';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsIndex());
  }, []);

  return (
    <main className="w-full h-full">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </main>
  );
};

export default App;
