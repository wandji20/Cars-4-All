import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  if (!loggedIn) {
    return <Navigate push to="/login" />;
  }

  return (
    <ProfileInfo />
  );
};

export default Profile;
