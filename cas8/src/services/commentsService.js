import { API_URL } from "../Konstanti/constants";

export const getComments = () => {
  return fetch(API_URL + "comments")
    .then((result) => result.json())
    .then((jsonValue) => jsonValue);
};
