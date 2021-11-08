import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { putUserUpdate, showUser } from '../../redux/user/userActions';

const ProfileInfo = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(showUser());
  }, []);

  const handleAvatarChange = (e) => {
    const avatar = e.target.files[0];
    const formData = new FormData();
    formData.append('user[avatar]', avatar);
    dispatch(putUserUpdate(formData));
  };
  return (
    <section className="profile">
      <div className="my-5 mx-3">
        <figure className="profile-image bg-gray-200 border-none rounded-full float-right">
          <label htmlFor="avatar" className="h-12 w-12 flex flex-col justify-center items-center">
            {
              user.avatar !== null
                ? <img src={user.avatar} alt="" />
                : (
                  <>
                    <span className="block text-xs">Upload</span>
                    <span className="block text-xs">Photo</span>
                  </>

                )
            }
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </figure>
        <p>
          <span className="block">
            Hello,
            {' '}
            {
                user.first_name
                }
          </span>
          <span className="block">
            Lorem ipsum dolor sit, amet adipisicing consectetur elit.
          </span>
          <span className="block">
            {
                user.verified
                  ? 'verified'
                  : 'not verified'
              }
          </span>
        </p>
        <p className="my-3 text-center">
          {
              !user.verified && (
              <>
                <span className="block my-1">Verify Account with a valid Driver License</span>
                <button type="button" className="bg-green-600 px-2 py-1">Verify Account</button>
              </>
              )
            }
        </p>
      </div>
      <div className="flex w-full flex-1">
        <ul className="flex flex-col justify-around items-start w-1/2">
          <li className="my-3 block ">
            <NavLink
              className="block mx-2 bg-gray-300 px-2 rounded-md"
              to="/cars"
            >
              All Cars
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              className="block mx-2 bg-gray-300 px-2 rounded-md"
              to="/rentals"
            >
              Rentals
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              className="block mx-2 bg-gray-300 px-2 rounded-md"
              to="/profile/edit"
              state={{ background: location }}
            >
              Edit Profile
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink
              className="block mx-2 bg-gray-300 px-2 rounded-md"
              to="/cars/new"
              state={{ background: location }}
            >
              Create Car
            </NavLink>
          </li>
        </ul>
        <div className="w-3/4">
          <h4 className="text-center">Activities</h4>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
