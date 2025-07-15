import axios from "axios";

import type { blogList, usersInterface } from "../Type/Type";
import { Messages } from "./CommonMessages";

export const loginRequest = (payload: usersInterface) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios.get("src/Users.json").then((res) => {
        const users = res.data;
        const isUserMatched = users.find(
          (user: usersInterface) =>
            user.email == payload.email && user.password === payload.password
        );
        if (isUserMatched) {
          resolve(isUserMatched);
        } else {
          reject(Messages.SignIn.error.value);
        }
      });
    }, 1000);
  });
};

export const fetchBlogs = (): Promise<blogList[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      axios.get("src/Blogs.json").then((res) => {
        resolve(res.data);
      });
    }, 1000);
  });
};
