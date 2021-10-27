export const setToken = (token) => {
  sessionStorage.setItem('Authorization', token);
};

export const getToken = () => {
  const token = sessionStorage.getItem('Authorization');
  return token;
};
