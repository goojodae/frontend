import React from "react";
import logo from "../src/asset/logo-color.png";
import { getCookie } from "./components/Cookies";
import { axiosTest } from "./components/test";
import { PiCrownSimpleFill } from "react-icons/pi";

const Main = () => {
  const onClick = () => {
    axiosTest()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="container mx-auto px-4 flex flex-col pt-24 items-center h-screen w-full">
      <img src={logo} className=" w-72"></img>
      <p className="mb-10">이미지를 원하는 자세로 바꿔보세요</p>
      {getCookie("accessToken") ? (
        <div className="flex flex-col justify-around h-40 ">
          <a
            href="/generate/pgpg"
            className="bg-header-blue h-14 w-60 text-darkblue rounded-xl text-center content-center hover:shadow-xl transition duration-5000 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            basic model
          </a>
          <div className="relative h-14 w-60 text-white rounded-xl text-center content-center bg-gradient-to-r from-pink-300 to-purple-400 hover:from-purple-400 hover:to-pink-300 hover:shadow-xl transition duration-7000 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <a
              href="/generate/pidm"
              className="font-bold"
            >
              advanced pro model
            </a>
            <PiCrownSimpleFill className="absolute left-32 top-3 text-yellow text" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-around h-40">
          <a
            href="/login"
            className="bg-header-blue h-14 w-60 text-xl rounded-xl text-center content-center hover:shadow-xl transition duration-7000 ease-in-out"
          >
            로그인
          </a>
          <a
            href="/signup"
            className="bg-header-blue h-14 w-60 text-xl rounded-xl text-center content-center hover:shadow-xl transition duration-7000 ease-in-out"
          >
            회원가입
          </a>
          {/* <div className="w-10 h-10 bg-black text-white" onClick={onClick}>
            test
            </div> */}
        </div>
      )}
    </div>
  );
};

export default Main;
