import React from "react";
import GenerateImage from "./GenerateImage";

const GeneratePG = () => {
  return (
    <div className="min-h-screen">
      <div
        className="bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 rounded-xl shadow-md mt-5 mx-5 p-4"
      >
        basic version
      </div>
      <GenerateImage />
      <div className="mt-14"></div>
    </div>
  );
};

export default GeneratePG;
