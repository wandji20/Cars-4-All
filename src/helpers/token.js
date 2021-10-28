export const setToken = (token, userName) => {
  sessionStorage.setItem('Authorization', token);
  sessionStorage.setItem('userName', userName);
};

export const getToken = () => {
  const token = sessionStorage.getItem('Authorization');
  return token;
};
