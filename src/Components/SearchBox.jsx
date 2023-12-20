import React, { useState } from "react";
import validUrl from "valid-url";

const SearchBox = ({ searchUrl, setSearchUrl }) => {
  const [searchedTitle, setSearchedTitle] = useState("Snap The Page");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchUrl || validUrl(searchUrl))
      return setSearchedTitle((prev) => "Snap The Page");

    let title = "";
    if (searchUrl.includes("https")) {
      title = searchUrl.split("https://")[1];
    } else {
      title = searchUrl.split("http://")[1];
    }
    title = title.split(".");
    title = title[title.length - 2];
    setSearchedTitle((prev) => title || "Snap The Page");
  };
  const handleInputChange = (e) => {
    if (!e.target.value) setSearchedTitle((prev) => "Snap The Page");
    setSearchUrl((prev) => e.target.value);
  };
  return (
    <div className="w-full py-14 flex flex-col gap-5">
      <div className="">
        <h2 className="text-secondaryColor text-center text-3xl md:text-4xl font-bold border-b-4 border-secondaryColor flex w-fit mx-auto pb-2 capitalize">
          {searchedTitle}
        </h2>
      </div>
      <div>
        <form
          className="flex items-stretch max-w-3xl mx-auto rounded-md overflow-hidden border-2 border-secondaryColor justify-stretch flex-col sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter url..."
            value={searchUrl}
            onChange={handleInputChange}
            className="input1 text-center sm:text-left"
          />
          <button type="submit" className="min-w-32 button1">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
