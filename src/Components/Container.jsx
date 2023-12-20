import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <div className={`w-[90%] max-w-6xl mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
