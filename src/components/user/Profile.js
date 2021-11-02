import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <ProfileInfo />
  );
};

export default Profile;
