import React from "react";

const ResultImage = ({ item }) => {
  return (
    <a href={`/mypage/${item.generationId}`} className="w-40 m-2" >
      <img src={item.resultImageUrl} className="w-40"></img>
    </a>
  );
};

export default ResultImage;
