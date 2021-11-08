/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import RentalCars from './components/rentals/RentalCars';
import Markets from './components/markets/Markets';
import Contact from './components/contact/Contact';
import Reviews from './components/testimonial/Reviews';
import More from './components/more/More';
import Login from './components/user/Login';
import SignupForm from './components/user/SignupForm';
import Profile from './components/user/Profile';
import Cars from './components/cars/Cars';
import Modal from './components/modal/Modal';
import { getCarsIndex } from './redux/cars/carActions';
import { getToken } from './helpers/token';
import { userCreateAction } from './redux/user/userActions';
// import FooterNav from './components/footer/FooterNav';
import CarInfo from './components/cars/CarInfo';
import Main from './components/main/Main';
import CarsIndex from './components/cars/CarsIndex';
import CarForm from './components/cars/CarForm';

const App = () => {
  const dispatch = useDispatch();

  const token = getToken();

  console.log('In App');
  useEffect(() => {
    dispatch(getCarsIndex());
  }, []);

  useEffect(() => {
    if (token && token !== '') {
      dispatch(userCreateAction({ loggedIn: true }));
    }
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<Home />} />
          <Route path="rentals" element={<RentalCars />} />
          <Route path="markets" element={<Markets />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cars" element={<Cars />}>
            <Route path="/cars" element={<CarsIndex />} />
            <Route path=":id" element={<CarInfo />} /> 
            <Route path="/cars/new" element={<Modal />} /> 
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>

      {/* <main className="w-full h-full">
        <Nav />
        <Routes>
          <Route exact path="testimonials" element={<Reviews/>} />
          <Route exact path="more" element={<More/>} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="sign_up" element={<SignupForm/>} />
          <Route exact path="profile" element={<Profile/>} />
          <Route
            exact
            path={['profile/edit', 'profile/cars/new', 'profile/cars/:id/edit']}
            element={<Modal />}
          />
        </Routes>
          <Route exact path="/cars/:id" element={CarInfo} />
        <FooterNav />
      </main> */}
    </Router>
  );
};

export default App;
