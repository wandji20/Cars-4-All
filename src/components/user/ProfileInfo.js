import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { showUser } from '../../redux/user/userActions';

const ProfileInfo = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, []);
  return (
    <section className="profile">
      <div className="m-3">
        <figure className="profile-image bg-gray-200 h-12 w-12 border-none rounded-full float-right flex justify-center">
          {
            user.avatar !== null
              ? <img src={user.avatar} alt="" />
              : <span className="inline-block m-auto text-xs">Upload</span>
          }
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
        </p>
      </div>
      <ul className="flex flex-col justify-around items-center">
        <p className="my-3">
          <span className="block">Provide valid ID or Driver License</span>
        </p>
        <h4 className="my-3">
          <span className="inline-block">Owned Cars</span>
          <span className="inline-block ml-4"><FontAwesomeIcon icon={faPlus} /></span>
        </h4>
        <h4 className="my-3">
          <span className="inline-block">Your Rentals</span>
          <span className="inline-block ml-4"><FontAwesomeIcon icon={faPlus} /></span>
        </h4>
        <h4 className="my-3">
          <span className="inline-block">Edit Profile</span>
          <span className="inline-block ml-4"><FontAwesomeIcon icon={faPlus} /></span>
        </h4>
      </ul>
    </section>
  );
};

export default ProfileInfo;
