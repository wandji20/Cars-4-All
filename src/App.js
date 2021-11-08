/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
  const location = useLocation();
  const background = location.state && location.state.background;
  console.log(background);

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
    <>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<Home />} />
          <Route path="rentals" element={<RentalCars />} />
          <Route path="markets" element={<Markets />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cars" element={<Cars />}>
            <Route path="/cars" element={<CarsIndex />} />
            <Route path=":id" element={<CarInfo />} /> 
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="profile" element={<Profile />}>
          </Route>
        </Route>
      </Routes>
      <Routes>
        {/* background && <Route path="cars/new" element={<Modal />} /> 
        background && <Route path="login" element={<Modal />} /> 
        background && <Route path="sign_up" element={<Modal />} />  */}
        { background && <Route path="cars/new" element={<Modal />} /> }
        { background && <Route path="login" element={<Modal />} /> }
        { background && <Route path="sign_up" element={<Modal />} /> }
      </Routes>
    </>
  );
};

export default App;
