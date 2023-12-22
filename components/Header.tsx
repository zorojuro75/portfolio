"use client";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  let social = [
    "https://github.com/zorojuro75",
    "https://www.facebook.com/sayedal.banna.75",
    "https://www.linkedin.com/in/sayed-al-banna-2419211a8/",
  ];
  let navs = [
    { label: "Home", href: "./" },
    { label: "Skills", href: "#skills" },
    // { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 border-b border-gray-700 z-10 bg-[#252734]">
      <div className="mx-auto max-w-5xl flex md:justify-between text-xl text-white h-[10vh] items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 50, opacity: 1 }}
          transition={{ duration: 2, x: { duration: 1 } }}
          className="text-gray-700 md:block hidden"
        >
          {social.map((item) => (
            <SocialIcon key={item} url={item} bgColor="transparent" />
          ))}
        </motion.div>
        <motion.div
          animate={{ x: -50, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ dduration: 2, x: { duration: 1 } }}
          className="md:flex md:gap-5 gap-3 text-base text-gray-400  hidden"
        >
          {navs.map((item) => (
            <Link
              href={item.href}
              className="hover:text-white"
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
        <div
          className="flex gap-3 text-base justify-center items-center text-gray-400  md:hidden w-[100vw]"
        >
          {navs.map((item) => (
            <Link
              href={item.href}
              className="hover:text-white"
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
