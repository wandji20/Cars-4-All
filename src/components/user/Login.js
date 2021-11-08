import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postAuthentication } from '../../redux/user/userActions';

const Login = () => {
  // const loggedIn = useSelector((state) => state.user.loggedIn);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  console.log(location);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAuthentication({ user_name: userName, password }));
    setPassword('');
    setUserName('');
  };

  return (
    <section className="signup-form flex flex-col justify-center pt-7">
      <div className="mx-auto text-center">
        <h4 className="text-2xl mx-1">Welcome to Cars 4 All</h4>
        <p className="text-sm ">
          <span className="block"> Don&apos;t have an account?</span>
          <span className="block">
            <NavLink className="text-green-900" to="/sign_up" state={{ background: location }}>Sign Up</NavLink>
          </span>
        </p>
      </div>
      <form
        className=" px-4 text-base "
        onSubmit={handleSubmit}
        id="user-form"
      >
        <label className="block w-full my-1" htmlFor="user">
          <span className="block w-full">User Name</span>
          <input
            className="block w-full border-solid border-2 border-light-blue-500 h-9"
            type="text"
            id="user"
            name="user"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>

        <label className="block w-full my-1" htmlFor="password">
          <span className="block w-full">Password</span>
          <input
            className="block w-full border-solid border-2 border-light-blue-500 h-9 "
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button className="w-full h-9 my-2 bg-gray-500" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Login;
