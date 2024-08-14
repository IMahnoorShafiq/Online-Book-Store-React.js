import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

// Links for Contact Section
const ContactLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

// Links for Links Section
const LinksSection = [
  {
    title: "Privacy Policy",
    link: "/#privacy",
  },
  {
    title: "Terms of Service",
    link: "/#terms",
  },
  {
    title: "FAQ",
    link: "/#faq",
  },
  {
    title: "Support",
    link: "/#support",
  },
];

// Links for Location Section
const LocationLinks = [
  {
    title: "New York",
    link: "/#newyork",
  },
  {
    title: "Los Angeles",
    link: "/#losangeles",
  },
  {
    title: "Toronto",
    link: "/#toronto",
  },
  {
    title: "London",
    link: "/#london",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Books Store
            </h1>
            <p>The words you choose can convey atmosphere and mood.</p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Toronto, Canada</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+44 023 678 99</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl text-orange-600" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl text-orange-600" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl text-orange-600" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div>
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact
                </h1>
                <ul className="flex flex-col gap-3">
                  {ContactLinks.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-orange-500 space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {LinksSection.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-orange-500 space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                <ul className="flex flex-col gap-3">
                  {LocationLinks.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-orange-500 space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            Copyright 2024 All rights reserved by Bookie Store
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
