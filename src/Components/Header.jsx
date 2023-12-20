import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <section className="bg-primaryColor py-5 border-b-4 border-secondaryColor">
      <Container>
        <div className="w-full flex justify-between items-center gap-5 flex-wrap flex-col sm:flex-row select-none">
          <Link to="/" className="w-20">
            <img src={logo} alt="" className="w-full" />
          </Link>
          <Link
            to="/"
            className="text-secondaryColor text-xl md:text-3xl font-bold text-center"
          >
            Snap The Page
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Header;
