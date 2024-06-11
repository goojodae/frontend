import axios from "axios";
import { getCookie } from "./Cookies"; 

const server = process.env.REACT_APP_SERVER_PORT

// certification
export const signUp = async (userInfo) => {
  return axios({
    method: "post",
    url: `${server}/api/auth/signup`,
    data: userInfo,
  });
};

export const login = async (userInfo) => {
  console.log(server)
  return axios({
    method: "post",
    url: `${server}/api/auth/login`,
    data:userInfo
  });
};

export const logout = async () => {
  return axios({
    method: "post",
    url: `${server}/api/auth/logout`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken")
    },
  });
};

export const withdraw = async (userInfo) => {
  return axios({
    method: "put",
    url: `${server}/api/auth/withdraw`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken")
    },
  });
};

export const resetPw = async (userInfo) => {
  return axios({
    method: "put",
    url: `${server}/api/auth/reset-pw`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken")
    },
    data: userInfo
  });
};

// Generate Image
export const generationPgpg = async (imageInfo) => {
  return axios({
    method: "put",
    url: `${server}/api/generation/pgpg`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken")
    },
    data: imageInfo
  });
};

export const myPageList = async () => {
  return axios({
    method: "get",
    url: `${server}/api/generation/my`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken")
    },
  });
};

export const myPageDetail = async (generation_id) => {
  return axios({
    method: "get",
    url: `${server}/api/generation/my/${generation_id}`,
  });
};