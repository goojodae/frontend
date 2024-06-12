import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import eraser from "../asset/eraser.png";
import pen from "../asset/pen.png";

const FabricCanvas = ({ setImageFile, setImage }) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  useEffect(() => {
    const canvasContainer = canvasContainerRef.current;
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: canvasContainer.offsetWidth,
      height: 500,
    });
    setCanvas(newCanvas);
    newCanvas.freeDrawingBrush.width = 4;
    newCanvas.isDrawingMode = true;
    return () => {
      newCanvas.dispose();
    };
  }, []);

  const selectPen = () => {
    canvas.freeDrawingBrush.width = 10;
    canvas.freeDrawingBrush.color = "black";
    canvas.isDrawingMode = true;
  };
  const selectEraser = () => {
    canvas.freeDrawingBrush.color = "white";
    canvas.freeDrawingBrush.width = 20;
    canvas.isDrawingMode = true;
  };
  const saveImage = () => {
    const canvasImage = canvas.toDataURL({
      format: "image/jpg",
    });
    const canvasFile = new File([canvasImage], "target.jpg",  { type: "image/png" })
    setImageFile(canvasFile);
    setImage(canvasImage);
  };

  return (
    <div
      className="flex flex-col justify-center mt-3 mb-6"
      ref={canvasContainerRef}
    >
      <div className="container px-auto flex">
        <canvas
          id="fabric-canvas"
          className="border-4 border-solid shadow-lg border-header-blue rounded-2xl"
          ref={canvasRef}
        ></canvas>
      </div>
      <div className="flex flex-row mt-5 items-center justify-around ">
        <button className="w-8 h-8" onClick={selectPen}>
          <img src={pen}></img>
        </button>
        <button className="w-7 h-7" onClick={selectEraser}>
          <img src={eraser}></img>
        </button>
        <div
          onClick={saveImage}
          className=" bg-darkgray text-white h-14 w-48 text-xl text-center content-center"
        >
          그림 업로드
        </div>
      </div>
    </div>
  );
};

export default FabricCanvas;
