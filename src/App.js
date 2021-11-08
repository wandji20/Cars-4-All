import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './components/home/Home';
import RentalCars from './components/rentals/RentalCars';
import RentalCarsIndex from './components/rentals/RentalCarsIndex';
import Markets from './components/markets/Markets';
import MarketsIndex from './components/markets/MarketsIndex';
import Contact from './components/contact/Contact';
import More from './components/more/More';
import Profile from './components/user/Profile';
import Cars from './components/cars/Cars';
import Modal from './components/modal/Modal';
import CarInfo from './components/cars/CarInfo';
import Main from './components/main/Main';
import CarsIndex from './components/cars/CarsIndex';
// import FooterNav from './components/footer/FooterNav';
import { getCarsIndex } from './redux/cars/carActions';
import { getToken } from './helpers/token';
import { userCreateAction } from './redux/user/userActions';
import Testimonials from './components/testimonial/Testimonials';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  const token = getToken();

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
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="more" element={<More />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="cars" element={<Cars />}>
            <Route path="/cars" element={<CarsIndex />} />
            <Route path=":id" element={<CarInfo />} />
            <Route path="/cars/markets" element={<Markets />}>
              <Route path="/cars/markets" element={<MarketsIndex />} />
              <Route path=":id" element={<CarInfo />} />
            </Route>
            <Route path="/cars/rentals" element={<RentalCars />}>
              <Route path="/cars/rentals" element={<RentalCarsIndex />} />
              <Route path=":id" element={<CarInfo />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={(
              <main style={{ padding: '1rem' }}>
                <p>There&apos;s nothing here!</p>
              </main>
            )}
          />
        </Route>
      </Routes>
      <Routes>
        { background && <Route path="profile/edit" element={<Modal />} /> }
        { background && <Route path="cars/new" element={<Modal />} /> }
        { background && <Route path="login" element={<Modal />} /> }
        { background && <Route path="sign_up" element={<Modal />} /> }
        { background && <Route path="cars/rentals/:id/edit" element={<Modal />} /> }
        { background && <Route path="cars/markets/:id/edit" element={<Modal />} /> }
        { background && <Route path="cars/:id/edit" element={<Modal />} /> }
      </Routes>
    </>
  );
};

export default App;
