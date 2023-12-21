import React, {  useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { LoadingContext } from "./CustomProvider/LoadingProvider";
import Loading from "./Components/Loading";

const App = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
      {isLoading && <Loading />}
    </div>
  );
};

export default App;
