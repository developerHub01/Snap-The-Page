import React from "react";

const SelectAll = ({ selectAllCheckState, handleSelectAllCheckState }) => {
  return (
    <div className="w-full flex justify-between">
      <span>
        <label
          htmlFor="selectAll"
          className={`inline-block button1 rounded-md mx-auto min-w-40 select-none border-4 transitionCommon ${
            selectAllCheckState
              ? "border-secondaryColor"
              : "border-primaryColor-500"
          }`}
        >
          Select All
        </label>
      </span>
      <input
        type="checkbox"
        name="selectAll"
        id="selectAll"
        onChange={handleSelectAllCheckState}
        hidden
      />
      <label
        htmlFor="selectAll"
        className={`inline-block size-10 rounded-full ${
          selectAllCheckState
            ? "border-[15px] border-secondaryColor"
            : "border-8 border-primaryColor-500"
        }  cursor-pointer transitionCommon`}
      ></label>
    </div>
  );
};

export default SelectAll;
