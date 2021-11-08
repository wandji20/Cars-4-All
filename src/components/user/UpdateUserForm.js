/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Error from '../errors/Error';
import { putUserUpdate } from '../../redux/user/userActions';


const UpdateUserForm = () => {

  const loggedIn = useSelector((state) => state.user.loggedIn);

  
  const myErrors = useSelector((state) => state.errors.errors);
  const user = useSelector((state) => state.user.user)
  
  const [userObj, setUserObj] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    user_name: user.user_name,
    telephone: user.telephone,
    email: user.email,
    password: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
const resetUserObj = () => {
  // setUserObj((state) => ({
    //   ...state, password: '',
    // }));
  };
    
  const dispatch = useDispatch();
  // const history = useHistory();
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('user[first_name]', userObj.first_name);
    formData.append('user[last_name]', userObj.last_name);
    formData.append('user[user_name]', userObj.user_name);
    formData.append('user[email]', userObj.email);
    formData.append('user[telephone]', userObj.telephone);
    formData.append('user[password]', userObj.password);
    e.preventDefault();
    dispatch(putUserUpdate(formData));
    resetUserObj();
  };

  return (
    <section className="signup-form flex flex-col justify-center overflow-y-auto">
      <div className="mx-auto text-center">
        <h4 className="text-2xl mx-1">Hi, {user.user_name}</h4>
        
      </div>
      <form
        className=" px-4 text-base"
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
            name="first_name"
            value={userObj.first_name}
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
            name="last_name"
            value={userObj.last_name}
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
            name="user_name"
            value={userObj.user_name}
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
          />
        </label>
        <label className="block w-full my-1" htmlFor="telphone">
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

        </label>
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
        
        <button className="w-full h-9 my-2 bg-gray-700" type="submit">
          Update Info
        </button>
      </form>
    </section>

  );
};

export default UpdateUserForm;
