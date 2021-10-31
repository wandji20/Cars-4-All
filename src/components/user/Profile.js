import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const history = useHistory();
  if (!loggedIn) {
    history.goBack();
  }

  return (
    <ProfileInfo />
  );
};

export default Profile;
