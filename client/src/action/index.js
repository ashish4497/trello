import { LOGIN_USER, REGISTER_USER } from "./type";
const url = "http://localhost:8000/api/v1/users";

export const signup = (data, cb) => (dispatch) => {
  fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "inside action login");
      dispatch({ type: REGISTER_USER, data });
      cb(true);
    });
};

export const login = (data, cb) => (dispatch) => {
  fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "inside action login");
      dispatch({ type: LOGIN_USER, data });
      cb(true);
    });
};
