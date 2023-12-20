import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="bg-primaryColor py-5 border-t-4 border-secondaryColor">
      <Container>
        <div className="w-full flex justify-center items-center gap-5 flex-wrap flex-col sm:flex-row select-none">
          <Link to="/" className="w-20">
            <img src={logo} alt="" className="w-full" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
