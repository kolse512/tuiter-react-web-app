import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
// const SERVER_API_URL = "http://localhost:4000/api"
console.log("SERVER_API_URL:", SERVER_API_URL);
const USERS_URL = `${SERVER_API_URL}/users`;


const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
  const response = await api.post(`${USERS_URL}/login`, { username, password });
  console.log("login function called"); // Check if the function is called
  const user = response.data;
  console.log("login response:", response.data); // Check the returned data
  return user;
};
export const register = async ({ username, password }) => {
  console.log("register function called");
  const response = await api.post(`${USERS_URL}/register`, { username, password });
  console.log("register response:", response.data); // Check the returned data
  const user = response.data;
  return user;
};
export const logout = async () => {
  const response = await api.post(`${USERS_URL}/logout`);
  return response.data;
};
export const profile = async () => {
  console.log("profile function called");
  const response = await api.post(`${USERS_URL}/profile`);
  console.log("profile data: ", response.data)
  return response.data;
};
export const updateUser = async (user) => {
  console.log("update user function called");
  const response = await api.put(`${USERS_URL}`, user);
  console.log("updateUser response: ", response.data);
  return response.data;
};