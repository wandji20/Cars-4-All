import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Error from '../errors/Error';
import { postUser } from '../../redux/user/userActions';

const SignupForm = () => {
  const myErrors = useSelector((state) => state.errors.errors);
  console.log(myErrors);
  const [userObj, setUserObj] = useState({
    first: '',
    last: '',
    user: '',
    telephone: '',
    email: '',
    password: '',
    confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetUserObj = () => {
    setUserObj((state) => ({
      ...state, password: '', confirmation: '',
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(userObj));
    resetUserObj();
  };

  return (
    <section className="signup-form flex flex-col justify-center">
      <div className="mx-auto text-center">
        <h4 className="text-2xl mx-1">Welcome to Cars 4 All</h4>
        <p className="text-sm ">
          <span className="block">Already signed up?</span>
          <span className="block"><NavLink className="text-green-900" to="login">Login</NavLink></span>
        </p>
      </div>
      <form
        className=" px-4 text-base overflow-y-auto"
        onSubmit={handleSubmit}
        id="user-form"
      >
        <label className="block w-full my-1" htmlFor="first">
          <span className="block w-full">First Name</span>
          {
            myErrors.first_name && <Error title="First name" message={myErrors.first_name[0]} />
          }
          <input
            className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
            type="text"
            id="first"
            name="first"
            value={userObj.first}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block w-full my-1" htmlFor="last">
          <span className="block w-full">Last Name</span>
          {
            myErrors.last_name && <Error title="Last name" message={myErrors.last_name[0]} />
          }
          <input
            autoComplete="off"
            className="block w-full border-solid border-2 border-light-blue-500 h-9 "
            type="text"
            id="last"
            name="last"
            value={userObj.last}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block w-full my-1" htmlFor="user">
          <span className="block w-full">User Name</span>
          {
            myErrors.user_name && <Error title="User name" message={myErrors.user_name[0]} />
          }
          <input
            className="block w-full border-solid border-2 border-light-blue-500 h-9"
            type="text"
            id="user"
            name="user"
            value={userObj.user}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block w-full my-1" htmlFor="email">
          <span className="block w-full">Email</span>
          {
            myErrors.email && <Error title="Email" message={myErrors.email[0]} />
          }
          <input
            autoComplete="off"
            className="block w-full border-solid border-2 border-light-blue-500 h-9 "
            type="email"
            id="email"
            value={userObj.email}
            name="email"
            onChange={handleChange}
            // required
          />
        </label>
        {/* <label className="block w-full my-1" htmlFor="telphone">
          <span className="block w-full">Telephone</span>
          <input
            autoComplete="off"
            className="block w-full border-solid border-2 border-light-blue-500 h-9"
            type="tel"
            id="telephone"
            name="telephone"
            value={userObj.telephone}
            onChange={handleChange}
          />

        </label> */}
        <label className="block w-full my-1" htmlFor="password">
          <span className="block w-full">Password</span>
          {
            myErrors.password && <Error title="Password" message={myErrors.password[0]} />
          }
          <input
            autoComplete="off"
            className="block w-full border-solid border-2 border-light-blue-500 h-9 "
            type="password"
            id="password"
            name="password"
            value={userObj.password}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block w-full my-1" htmlFor="confirmation">
          <span className="block w-full">Password Confirmation</span>
          {
            myErrors.password_confirmation && <Error title="Password confrmation" message={myErrors.password_confirmation[0]} />
          }
          <input
            className="block w-full border-solid border-2 border-light-blue-500 h-9 "
            type="password"
            id="confirmation"
            name="confirmation"
            value={userObj.confirmation}
            onChange={handleChange}
            required
          />
        </label>
        <button className="w-full h-9 my-2" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
