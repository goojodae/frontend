import React, { useEffect, useState } from "react";
import attention from "../../src/asset/attention.png";
import Tooltip from "./Tooltip";
import useStore from "../store";
import ImageUploader from "./ImageUploader";
import arrow from "../asset/arrow.png";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../components/Cookies";
import { axiosGenerationPgpg } from "../components/Axios";
import LoadingIndicator from "../components/LoadingIndicator";

const GenerateImage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getCookie("accessToken")) navigate("/");
  }, []);

  const activeTooltip = useStore((state) => state.activeTooltip);
  const setActiveTooltip = useStore((state) => state.setActiveTooltip);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const newImages = [...images];
    newImages[page] = image;
    setImages(newImages);
  }, [image]);

  const generateImage = async () => {
    setLoading(true);
    setPage(2);
    axiosGenerationPgpg({
      conditionImageUrl: images[0],
      targetImageUrl: images[1],
    })
      .then((res) => {
        setImage(res.data.data.resultImageUrl);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  const previousPage = () => {
    if (page) setPage(page - 1);
  };

  const nextPage = () => {
    if (images[page] && page < 3) {
      setPage(page + 1);
    } else {
      window.alert("이미지를 업로드해주세요!");
    }
  };

  const title = ["1. 변경할 이미지", "2. 목표 자세 이미지", "결과"];

  return (
    <div className="bg-gray-100 p-5 mt-8 mb-8 min-h-screen">
      <h1 className="text-2xl mb-2 text-center">{title[page]}</h1>
      {loading ? <LoadingIndicator /> : <></>}
      <div className="relative">
        {page === 2? <></>:<img
          src={attention}
          className="w-8 h-8 hover:cursor-pointer"
          onClick={setActiveTooltip}
        ></img>}
        <Tooltip activeTooltip={activeTooltip} />
      </div>
      <ImageUploader
        images={images}
        image={image}
        setImage={setImage}
        imageFile={imageFile}
        setImageFile={setImageFile}
        page={page}
      />
      <div className="flex flex-row justify-between mt-5">
        <img
          src={arrow}
          className={`w-8 h-8 ${!page || page === 2 ? "invisible" : ""}`}
          onClick={previousPage}
        ></img>
        <img
          src={arrow}
          className={`w-8 h-8 rotate-180 ${page === 2 ? "invisible" : ""}`}
          onClick={page === 1? generateImage:nextPage}
        ></img>
      </div>
    </div>
  );
};

export default GenerateImage;
