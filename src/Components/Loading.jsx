import React from "react";

const Loading = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-full grid place-items-center p-5 bg-primaryColor-500/30">
      <span className="w-40 h-40 block rounded-full border-[15px] border-secondaryColor border-t-transparent border-b-transparent animate-spin"></span>
    </section>
  );
};

export default Loading;
