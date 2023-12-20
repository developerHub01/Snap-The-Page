import React, { useEffect, useState } from "react";
import SelectAll from "./SelectAll";
import ImageList from "./ImageList";
import JSZip from "jszip";

const LoadedContent = ({ searchUrl }) => {
  const [imageList, setImageList] = useState([]);
  const [selectAllCheckState, setSelectAllCheckState] = useState(true);
  useEffect(() => {
    fetch(`https://get-images-server.vercel.app/fetchData?url=${searchUrl}`)
      .then((res) => res.json())
      .then((data) => setImageList(data));
  }, []);
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

  const handleDownload = async () => {
    const zip = new JSZip();
    console.log(searchUrl);
    let hostTitle = searchUrl.split(".");
    hostTitle = hostTitle[hostTitle.length - 2];

    for (let i in imageList) {
      if (imageList[i].state) {
        const res = await fetch(imageList[i].url);
        const blob = await res.blob();
        zip.file(`${hostTitle}_${i}.png`, blob);
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
      {imageList.length && (
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
