export const setToken = (token, user) => {
  sessionStorage.setItem('Authorization', token);
  console.log(user);
  sessionStorage.setItem('user', JSON.stringify(user));
};

export const getToken = () => {
  const token = sessionStorage.getItem('Authorization');
  return token;
};

export const getUser = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return user;
};
