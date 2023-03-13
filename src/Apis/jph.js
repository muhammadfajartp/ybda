import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users/";

const getUsers = () => {
  return axios.create({
    baseURL: `${BASE_URL}`,
  });
};

const getUsersPage = (id) => {
  return axios.create({
    baseURL: `${BASE_URL}/${id}`,
  });
};

const putUsersPage = (id) => {
  return axios.create({
    baseURL: `${BASE_URL}/${id}`,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export { getUsers, getUsersPage, putUsersPage };
