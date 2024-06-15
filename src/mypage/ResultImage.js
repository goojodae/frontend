import React from "react";

const ResultImage = ({ item }) => {
  return (
    <a href={`/mypage/${item.generationId}`} className="w-40 mb-2" >
      <img src={item.resultImageUrl} className="w-40 h-32"></img>
    </a>
  );
};

export default ResultImage;
