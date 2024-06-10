import axios from "axios";
import { getCookie } from "./Cookies"; 

// certification
export const signUp = async (userInfo) => {
  return axios({
    method: "post",
    url: "/api/auth/signup",
    data: userInfo,
  });
};

export const login = async (userInfo) => {
  return axios({
    method: "post",
    url: "/api/auth/login",
    data:userInfo
  });
};

export const logout = async () => {
  return axios({
    method: "post",
    url: "/api/auth/login",
    headers: {
      Authorization: getCookie("accessToken")
    },
  });
};

export const withdraw = async (userInfo) => {
  return axios({
    method: "put",
    url: "/api/auth/withdraw",
    headers: {
      Authorization: getCookie("accessToken")
    },
  });
};

export const resetPw = async (userInfo) => {
  return axios({
    method: "put",
    url: "/api/auth/reset-pw",
    headers: {
      Authorization: getCookie("accessToken")
    },
    data: userInfo
  });
};

// Generate Image
export const generationPgpg = async (imageInfo) => {
  return axios({
    method: "put",
    url: "/api/generation/pgpg",
    headers: {
      Authorization: getCookie("accessToken")
    },
    data: imageInfo
  });
};

export const myPageList = async () => {
  return axios({
    method: "get",
    url: "/api/generation/my",
    headers: {
      Authorization: getCookie("accessToken")
    },
  });
};

export const myPageDetail = async (generation_id) => {
  return axios({
    method: "get",
    url: `/api/generation/my/${generation_id}`,
  });
};