import React, { useEffect, useState } from "react";
import attention from "../../src/asset/attention.png";
import Tooltip from "./Tooltip";
import useStore from "../store";
import ImageUploader from "./ImageUploader";
import arrow from "../asset/arrow.png";
import { useNavigate } from "react-router-dom";

const GenerateImage = () => {
  // Login 상태가 아니면 main page로 navigate
  const isLogin = useStore((state) => state.isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) navigate("/");
  }, []);

  const activeTooltip = useStore((state) => state.activeTooltip);
  const setActiveTooltip = useStore((state) => state.setActiveTooltip);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [page, setPage] = useState(0);

  const previousPage = () => {
    if (page) setPage(page - 1);
  };

  const nextPage = () => {
    if (image && imageFile) {
      if (page < 4) setPage(page + 1);
    } else {
      window.alert("이미지를 업로드해주세요!");
    }
  };
  const title = ["1. 변경할 이미지", "2. 목표 자세 이미지", "결과"];

  return (
    <div className="bg-gray-100 p-5 mt-8 mb-8 min-h-screen">
      <h1 className="text-2xl mb-2 text-center">{title[page]}</h1>
      <div className="relative">
        <img
          src={attention}
          className="w-8 h-8 hover:cursor-pointer"
          onClick={setActiveTooltip}
        ></img>
        <Tooltip activeTooltip={activeTooltip} />
      </div>
      <ImageUploader
        image={image}
        setImage={setImage}
        imageFile={imageFile}
        setImageFile={setImageFile}
      />
      <div className="flex flex-row justify-between mt-5">
        <img
          src={arrow}
          className={`w-8 h-8 ${!page ? "invisible" : ""}`}
          onClick={previousPage}
        ></img>
        <img
          src={arrow}
          className="w-8 h-8 rotate-180"
          onClick={nextPage}
        ></img>
      </div>
    </div>
  );
};

export default GenerateImage;
