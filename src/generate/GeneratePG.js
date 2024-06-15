import React, { useState } from "react";
import GenerateImage from "./GenerateImage";

const GeneratePG = () => {
  const [isDrop, setIsDrop] = useState(false);
  const dropDownMenu = () => {
    setIsDrop(!isDrop);
  };
  return (
    <div className="min-h-screen">
      <div
        onClick={dropDownMenu}
        className="bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 rounded-xl shadow-md mt-5 mx-5 p-4"
      >
        basic version
      </div>
      <div className={`bg-blue-100 rounded-xl shadow-md mx-5 p-4  ${isDrop? "animate-fadeInDown":"animate-fadeOutUp"} `}>pro version</div>
      <GenerateImage />
      <div className="mt-14"></div>
    </div>
  );
};

export default GeneratePG;
