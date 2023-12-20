import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-ful h-screen bg-primaryColor p-4 grid place-items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-secondaryColor text-center text-[60px] sm:text-[180px] font-bold leading-tight">
          404
        </h1>
        <p className="text-lightColor text-center">Page not found</p>
        <Link
          to="/"
          className="px-5 py-2 text-sm sm:text-base text-center bg-secondaryColor text-whiteColor capitalize"
        >
          Move To Home Page
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
