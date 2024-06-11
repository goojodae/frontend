import React, { useState } from "react";

const ImageUploader = ({ image, setImage, imageFile, setImageFile }) => {
  const [dragOver, setDragOver] = useState(false);
  const [hasFile, setHasFile] = useState(false);

  const renderFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setHasFile(true);
    };
  };
  const checkFileSize = (file) => {
    let maxSize = 4 * 1024 * 1024;
    let fileSize = file.size;
    if (fileSize > maxSize) {
      alert("첨부파일 사이즈는 4MB 이내로 등록 가능합니다.");
      return false;
    }
    return true;
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    if (e.dataTransfer.items) {
      if (e.dataTransfer.items.length > 1) {
        alert("사진은 하나만 업로드 가능합니다.");
        return;
      } else if (
        e.dataTransfer.items[0].getAsFile().type !== "image/jpeg" &&
        e.dataTransfer.items[0].getAsFile().type !== "image/png" &&
        e.dataTransfer.items[0].getAsFile().type !== "image/gif"
      ) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      } else if (checkFileSize(e.dataTransfer.items[0].getAsFile())) {
        renderFile(e.dataTransfer.items[0].getAsFile());
        setImageFile(e.dataTransfer.items[0].getAsFile());
      }
    } else {
      if (e.dataTransfer.files.length > 1) {
        alert("사진은 하나만 업로드 가능합니다.");
        return;
      } else if (
        e.dataTransfer.files[0].type !== "image/png" &&
        e.dataTransfer.files[0].type !== "image/jpeg" &&
        e.dataTransfer.files[0].type !== "image/gif"
      ) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      } else if (checkFileSize(e.dataTransfer.files[0])) {
        renderFile(e.dataTransfer.files[0]);
        setImageFile(e.dataTransfer.files[0]);
      }
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };
  const handleDragleave = (e) => {
    setDragOver(false);
  };
  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (checkFileSize(e.target.files[0])) {
        renderFile(e.target.files[0]);
        setImageFile(e.target.files[0]);
      }
    }
  };
  const handleDeleteFlie = (e) => {
    setHasFile(false);
    setImage(null);
  };

  return (
    <div>
      {hasFile ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragleave}
          className="mt-3 bg-white p-4 flex flex-col items-center border-header-blue border-4 border-solid rounded-2xl shadow-lg h-3/5 justify-center"
        >
          <img src={image} className=''></img>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragleave}
          className={`mt-3 p-4 flex flex-col items-center border-header-blue border-4 border-solid rounded-2xl shadow-lg h-3/5 justify-center min-h-imageLoader ${dragOver? 'bg-blue border-darkblue':'bg-white'}`}
        >
          <p className="font-Outfit text-3xl text-darkgray">Posetive</p>
          <p className=" text-darkgray">업로드할 사진 끌어놓기 </p>
        </div>
      )}
      <div className="flex justify-center mt-10">
        <label
          onChange={handleFile}
          htmlFor="chooseFile"
          className="file-label bg-darkgray text-white h-14 w-60 text-xl text-center content-center"
        >
          이미지 업로드
        </label>
        <input
          className="file hidden"
          id="chooseFile"
          type="file"
          onChange={handleFile}
          accept="image/png, image/jpeg, image/gif"
          multiple={false}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
