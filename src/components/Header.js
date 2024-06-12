import React from "react";
import hambuger from "../asset/hambuger.png";
import useStore from "../store";
import { getCookie, removeCookie } from "./Cookies";
import { axiosLogout } from "./Axios";
import { useNavigate } from "react-router-dom";
import { options } from "./setupCertified";
import logo from "../asset/logo-black.png"

const Header = () => {
  const activeMenu = useStore((state) => state.activeMenu);
  const setActiveMenu = useStore((state) => state.setActiveMenu);
  const navigate = useNavigate();
  const onClick = async () => {
    axiosLogout()
      .then((res) => {
        removeCookie("accessToken", options)
        window.alert("로그아웃되었습니다.");
        navigate("/");
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <header className="flex flex-row justify-between h-26 bg-header-blue items-center">
      <a href="/">
        <img  src={logo} className=" ml-4 font-Outfit align-middle w-40">
        </img>
      </a>
      <div onClick={setActiveMenu} className="">
        <img src={hambuger} alt="menu" className="w-8 h-8 m-4 mr-4" />
        {getCookie("accessToken") ? (
          <div
            className={`flex flex-col text-center justify-items-center bg-yellow z-50 absolute right-0 border-darkblue border-2 border-solid ${
              activeMenu ? "" : "hidden"
            }`}
          >
            <a
              href="/"
              className="w-44 h-14 text-xl border-darkblue border-b-2 border-solid content-center"
            >
              Home
            </a>
            <a
              href="/mypage"
              className="w-50 h-14 text-xl border-darkblue border-b-2 border-solid content-center"
            >
              My Page
            </a>
            <div onClick={onClick} className="w-50 h-14 text-xl content-center">
              Logout
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col text-center justify-items-center bg-yellow z-50 absolute right-0 border-darkblue border-2 border-solid ${
              activeMenu ? "" : "hidden"
            }`}
          >
            <a
              href="/"
              className="w-44 h-14 text-xl border-darkblue border-b-2 border-solid content-center"
            >
              Home
            </a>
            <a
              href="/login"
              className="w-50 h-14 text-xl border-darkblue border-b-2 border-solid content-center"
            >
              Login
            </a>
            <a href="/signup" className="w-50 h-14 text-xl content-center">
              SignUp
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
