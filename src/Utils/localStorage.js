const USER_KEY = "user";
export const getUserStorage = () => {
  var user = localStorage.getItem(USER_KEY);
  return user;
};
export const setUserStorage = (user) => {
  localStorage.setItem(USER_KEY, user);
};
