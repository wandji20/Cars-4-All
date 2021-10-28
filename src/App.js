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
import Rentals from './components/rentals/Rentals';
import markets from './components/markets/markets';
import Contact from './components/contact/Contact';
import Reviews from './components/testimonial/Reviews';
import More from './components/more/More';
import Login from './components/user/Login';
import SignupForm from './components/user/SignupForm';
import Profile from './components/user/Profile';
import { getCarsIndex } from './redux/cars/carActions';
import { getToken } from './helpers/token';
import { userCreateAction } from './redux/user/userActions';

const App = () => {
  const dispatch = useDispatch();

  const token = getToken();
  console.log(token);

  useEffect(() => {
    if (token && token !== '') {
      dispatch(userCreateAction({ loggedIn: true }));
    }
    dispatch(getCarsIndex());
  }, []);

  return (
    <main className="w-full h-full">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/rentals" component={Rentals} />
          <Route exact path="/markets" component={markets} />
          <Route exact path="/" component={Home} />
          <Route exact path="/cantact" component={Contact} />
          <Route exact path="/testimonials" component={Reviews} />
          <Route exact path="/more" component={More} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign_up" component={SignupForm} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
      <Footer />
    </main>
  );
};

export default App;
