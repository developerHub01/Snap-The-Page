import React, { useContext, useEffect, useState } from "react";
import SelectAll from "./SelectAll";
import ImageList from "./ImageList";
import JSZip from "jszip";
import { LoadingContext } from "../CustomProvider/LoadingProvider";
import { serverLink } from "../Constant/Constant";

const LoadedContent = ({ searchUrl }) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [imageList, setImageList] = useState([]);
  const [selectAllCheckState, setSelectAllCheckState] = useState(true);
  useEffect(() => {
    fetch(`${serverLink}/fetchData?url=${searchUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading((prev) => false);
        setImageList((prev) =>
          data.map((item) => ({ url: item, state: true }))
        );
      })
      .catch((error) => {
        setIsLoading((prev) => false);
      });
  }, [isLoading]);
  const handleSelectAllCheckState = () => {
    setSelectAllCheckState((prev) => {
      setImageList((prev) =>
        prev.map(({ url }) => ({ url, state: !selectAllCheckState }))
      );
      return !prev;
    });
  };
  const handleEachImageSelectionState = (i) => {
    if (imageList.filter((item) => item.state).length === imageList.length)
      setSelectAllCheckState((prev) => true);
    if (!imageList[i].state) setSelectAllCheckState((prev) => false);
  };

  const downloadImage = (url, fileName) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Convert canvas to blob
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, "image/png");
      };

      img.onerror = function (error) {
        reject(error);
      };

      img.src = url;
    });
  };

  const handleDownload = async () => {
    const zip = new JSZip();
    let hostTitle = "";
    if (searchUrl.includes("https")) {
      hostTitle = searchUrl.split("https://")[1];
    } else {
      hostTitle = searchUrl.split("http://")[1];
    }
    hostTitle = hostTitle.split(".")[0];

    for (let i in imageList) {
      if (imageList[i].state) {
        try {
          const blob = await downloadImage(
            imageList[i].url,
            `${hostTitle}_${i}.png`
          );
          zip.file(`${hostTitle}_${i}.png`, blob);
        } catch (error) {
          console.error(`Error downloading image ${i}:`, error);
        }
      }
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      const a = document.createElement("a");
      const url = URL.createObjectURL(content);
      a.href = url;
      a.download = `${hostTitle}.zip`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      {Boolean(imageList.length) && (
        <div className="w-full py-14 flex flex-col gap-4 justify-center items-center">
          <SelectAll
            selectAllCheckState={selectAllCheckState}
            handleSelectAllCheckState={handleSelectAllCheckState}
          />
          <ImageList
            imageList={imageList}
            setImageList={setImageList}
            handleEachImageSelectionState={handleEachImageSelectionState}
          />
          <button
            className="button1 rounded-md mx-auto min-w-40 w-[400px]"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      )}
    </>
  );
};

export default LoadedContent;
