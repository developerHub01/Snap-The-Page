import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import chromeLogo from "../assets/chromeLogo.png";
import firefoxLogo from "../assets/firefoxLogo.png";
import githubLogo from "../assets/github.png";
import webLogo from "../assets/web.png";
import { portfolioLink, githubLink } from "../Constant/Constant";

const Footer = () => {
  return (
    <section className="bg-primaryColor py-5 border-t-4 border-secondaryColor">
      <Container>
        <div className="w-full flex justify-center items-center gap-5 flex-col select-none">
          <Link to="/" className="w-40">
            <img src={logo} alt="" className="w-full" />
          </Link>
          <span className="divider"></span>
          <div className="w-full flex flex-col md:flex-row sm:flex-row justify-between items-center md:items-start gap-4">
            <div className="flex flex-col justify-center items-center md:items-start gap-2">
              <h3 className="text-secondaryColor text-2xl font-medium pb-2">
                Get Our Extension
              </h3>
              <ul className="flex justify-start items-center gap-2">
                <li>
                  <Link to="" className="size-10 inline-block">
                    <img
                      src={chromeLogo}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="" className="size-10 inline-block">
                    <img
                      src={firefoxLogo}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center md:items-end gap-2">
              <h3 className="text-secondaryColor text-2xl font-medium pb-2">
                Developed By
                <Link
                  to={githubLink}
                  className="text-secondaryColor underline pl-1"
                >
                  Shakil
                </Link>
              </h3>
              <ul className="flex justify-start items-center gap-2">
                <li>
                  <Link to={githubLink} className="size-10 inline-block">
                    <img
                      src={githubLogo}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </li>
                <li>
                  <Link to={portfolioLink} className="size-10 inline-block">
                    <img
                      src={webLogo}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <span className="divider"></span>
          <div className="w-full">
            <p className="text-center text-lightColor">
              All &copy;right is reserved to
              <Link to={githubLink} className="text-secondaryColor underline">
                Shakil
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
