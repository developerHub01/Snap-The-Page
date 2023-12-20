import React from "react";

const ImageList = ({
  imageList,
  setImageList,
  handleEachImageSelectionState,
}) => {
  console.log(imageList);
  const handleImageCheck = (key) => {
    const list = imageList;
    list[key].state = !list[key].state;
    setImageList((prev) => [...list]);
  };
  return (
    <section className="w-full py-5 overflow-hidden">
      <div className="w-full h-full overflow-y-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-2">
        {imageList.map(({ url, state }, i) => (
          <div
            key={i}
            className={`w-full h-full min-h-28 relative p-3 rounded-md shadow-2xl bg-primaryColor hover:bg-secondaryColor transitionCommon cursor-pointer border-4 ${
              state ? "border-secondaryColor" : "border-primaryColor-500"
            }`}
          >
            <input
              type="checkbox"
              name={url}
              id={i}
              hidden
              onChange={() => {
                handleImageCheck(i);
                handleEachImageSelectionState(i);
              }}
            />
            <label
              htmlFor={i}
              className="w-full h-full grid place-items-center cursor-pointer"
            >
              <img
                src={url}
                alt=""
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageList;
