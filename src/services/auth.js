export const TOKEN_KEY = "@geotif-token";
export const USER = "@user";
export const getUser = () => localStorage.getItem(USER);

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);
export const getToken = async () => {
  const user = await localStorage.getItem(TOKEN_KEY);
  console.log("User", user);
  return JSON.parse(user);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
