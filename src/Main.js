import React from "react";
import logo from "../src/asset/logo-color.png"
import { getCookie } from "./components/Cookies";

const Main = () => {

  return (
    <div className="container mx-auto px-4 flex flex-col pt-24 items-center h-screen w-full">
      <img src={logo} className=" w-72"></img>
      <p className="mb-10">이미지를 원하는 자세로 바꿔보세요</p>
      {getCookie('accessToken') ? (
        <div className="flex flex-col justify-around h-60 p-14">
          <a
            href="/generate/pgpg"
            className="bg-header-blue h-14 w-60 text-darkblue rounded-xl text-center content-center"
          >
            GAN model로 이미지 생성
          </a>
          <a
            href="/generate/pidm"
            className="bg-header-blue h-14 w-60 text-darkblue rounded-xl text-center content-center"
          >
            Diffusion model로 이미지 생성
          </a>
        </div>
      ) : (
        <div className="flex flex-col justify-around h-40">
          <a
            href="/login"
            className="bg-header-blue h-14 w-60 text-xl text-darkblue rounded-xl text-center content-center"
          >
            로그인
          </a>
          <a
            href="/signup"
            className="bg-header-blue h-14 w-60 text-xl text-darkblue rounded-xl text-center content-center"
          >
            회원가입
          </a>
        </div>
      )}
    </div>
  );
};

export default Main;
