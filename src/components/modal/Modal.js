/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation, useHistory, useParams, Redirect,
} from 'react-router-dom';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateUserForm from '../user/UpdateUserForm';
import Login from '../user/Login';
import SignupForm from '../user/SignupForm';

const Modal = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { option } = useParams();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  console.log(pathname, option);

  const options = {
    '/profile/edit': <UpdateUserForm />,
    '/login': <Login />,
    '/sign_up': <SignupForm />
  };

  const back = () => {
    history.goBack();
  };

  if (!loggedIn && pathname !== '/login') {
    return <Redirect to="/login" />;
  }

  return (
    <section className="absolute inset-0 z-10 bg-transparent">
      <div className="absolute inset-4  bg-gray-300">
        <button
          type="button"
          className="inline-block absolute top-2 h-6 w-6 right-2 bg-gray-500"
          onClick={back}
        >
          <span><FontAwesomeIcon icon={faWindowClose} /></span>
        </button>
        <div className="bg-gray-100 absolute top-8 bottom-0 inset-x-0 overflow-y-auto">
          {
            options[pathname] ? options[pathname] : <p className="">Invalid Url</p>
          }
        </div>
      </div>
    </section>
  );
};

export default Modal;
