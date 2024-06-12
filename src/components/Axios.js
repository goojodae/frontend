import axios from "axios";
import { getCookie } from "./Cookies";

const server = process.env.REACT_APP_SERVER_PORT;

// certification
export const axiosSignUp = async (userInfo) => {
  return axios({
    method: "post",
    url: `${server}/api/auth/signup`,
    data: userInfo,
  });
};

export const axiosLogin = async (userInfo) => {
  console.log(server);
  return axios({
    method: "post",
    url: `${server}/api/auth/login`,
    data: userInfo,
  });
};

export const axiosLogout = async () => {
  return axios({
    method: "post",
    url: `${server}/api/auth/logout`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken"),
    },
  });
};

export const axiosWithdraw = async (userInfo) => {
  return axios({
    method: "put",
    url: `${server}/api/auth/withdraw`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken"),
    },
  });
};

export const axiosResetPw = async (userInfo) => {
  return axios({
    method: "put",
    url: `${server}/api/auth/reset-pw`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    data: userInfo,
  });
};

// Generate Image
export const axiosGenerationPgpg = async (imageInfo) => {
  return axios({
    method: "post",
    url: `${server}/api/generation/pgpg`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken"),
      // "Content-Type": "multipart/form-data",
    },
    // data: imageInfo,
    data: {
      conditionImageUrl:"https://i.namu.wiki/i/GQMqb8jtiqpCo6_US7jmWDO30KfPB2MMvbdURVub61Rs6ALKqbG-nUATj-wNk7bXXWIDjiLHJxWYkTELUgybkA.webp",
      targetImageUrl:"https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/PMf1Svki5j407IcpPXbV6LMi4XY",
    }
  });
};

export const axiosMyPageList = async () => {
  return axios({
    method: "get",
    url: `${server}/api/generation/my`,
    headers: {
      Authorization: "Bearer " + getCookie("accessToken"),
    },
  });
};

export const axiosMyPageDetail = async (generation_id) => {
  return axios({
    method: "get",
    url: `${server}/api/generation/my/${generation_id}`,
  });
};
