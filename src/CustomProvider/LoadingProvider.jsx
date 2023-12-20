import React, { createContext, useState } from "react";
export const LoadingContext = createContext(null);
const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const data = { isLoading, setIsLoading };
  return (
    <LoadingContext.Provider value={data}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
