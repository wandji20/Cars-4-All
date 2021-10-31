import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { showUser } from '../../redux/user/userActions';
// import Modal from '../modal/Modal';

const ProfileInfo = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, []);
  return (
    <>
      {/* <Modal /> */}
      <section className="profile">
        <div className="m-3">
          <figure className="profile-image bg-gray-200 h-12 w-12 border-none rounded-full float-right flex justify-center items-center">
            {
              user.avatar !== null
                ? <img src={user.avatar} alt="" />
                : <span className="inline-block text-xs">Upload</span>
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
            <span className="block">
              {
                user.verified
                  ? 'verified'
                  : 'not verified'
              }
            </span>
          </p>
          <p className="my-3">
            {
              !user.verified && <span className="block">Verify Account with a valid Driver License</span>
            }
          </p>
        </div>
        <div className="flex w-full flex-1">
          <ul className="flex flex-col justify-around items-center w-1/2">
            <h4 className="my-3">
              <span className="inline-block">All Cars</span>
              {/* <span className="inline-block ml-4"><FontAwesomeIcon icon={faPlus} /></span> */}
            </h4>
            <h4 className="my-3">
              <span className="inline-block">Rentals</span>
              {/* <span className="inline-block ml-4"><FontAwesomeIcon icon={faPlus} /></span> */}
            </h4>
            <h4 className="my-3">
              <span className="inline-block">Edit Profile</span>
              {/* <span className="inline-block ml-4"><FontAwesomeIcon icon={faPlus} /></span> */}
            </h4>
          </ul>
          <div className="w-3/4">
            <h4>Activities</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
