import React, { useEffect } from "react";
import useStore from "../store";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../components/Cookies";
import { axiosMyPageList } from "../components/Axios";
import MyPageDetail from "./MyPageDetail";
import ResultImage from "./ResultImage";

const MyPage = () => {
  const myPageList = useStore((state) => state.myPageList);
  const setMyPageList = useStore((state) => state.setMyPageList);
  const navigate = useNavigate();
  useEffect(() => {
    if (!getCookie("accessToken")) {
      navigate("/");
    } else {
      getMyPageList();
    }
  }, []);

  const getMyPageList = async () => {
    axiosMyPageList()
      .then((res) => {
        setMyPageList(res.data.data.generations);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container flex flex-col pt-12 justify-content-center items-center h-screen w-full ">
      <div className="flex flex-row flex-wrap content-start">
        {myPageList.map((item) => {
          return <ResultImage key={item.generationId} item={item} />;
        })}
      </div>
      <div className="flex flex-row mt-4 items-end w-full">
        <div className="mr-4">비밀번호 변경</div>
        <div>회원탈퇴</div>
      </div>
    </div>
  );
};

export default MyPage;
