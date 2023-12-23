import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
type Props = {};

const Project = (props: Props) => {
  return (
      <section
        id="projects"
        className="max-w-5xl md:mx-auto flex flex-col justify-center mx-5 my-5 py-10"
      >
        <div className="text-lg text-gray-500 "> II My Awesome Projects</div>
        <div className="md:text-5xl text-3xl">My Completed Projects</div>
        <div className="grid md:grid-cols-2 gap-5 md:mt-20 mt-5">
          <div className="bg-[#2a2c39] p-10 shadow-lg">
            <div className="py-2 text-xl flex gap-2 justify-end">
              <a href={"https://league-of-engineers.jukti.club"}>
                <IoIosLink />
              </a>
              <a href="https://github.com/zorojuro75/league-of-engineers">
                <FaGithub />
              </a>
            </div>
            <Image src={"/project1.jpeg"} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">
              League of Engineers
            </div>
          </div>
          <div className="bg-[#2a2c39] p-10 shadow-lg">
            <div className="py-2 text-xl flex gap-2 justify-end">
              <a href={"https://trello-clone-zorojuro75.vercel.app"}>
                <IoIosLink />
              </a>
              <a href="https://github.com/zorojuro75/Trello-clone">
                <FaGithub />
              </a>
            </div>
            <Image src={"/project2.jpeg"} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">Trello 2.0</div>
          </div>
          <div className="bg-[#2a2c39] p-10 shadow-lg">
            <div className="py-2 text-xl flex gap-2 justify-end">
              {/* <a href={""}>
                <IoIosLink />
              </a> */}
              <a href="https://github.com/r-Shabab/JUKTI">
                <FaGithub />
              </a>
            </div>
            <Image src={"/project3.png"} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">JUKTI</div>
          </div>
          <div className="bg-[#2a2c39] p-10 shadow-lg">
            <div className="py-2 text-xl flex gap-2 justify-end">
              <a href={"https://weather-app-zorojuro75.vercel.app"}>
                <IoIosLink />
              </a>
              <a href="https://github.com/zorojuro75/weather-app">
                <FaGithub />
              </a>
            </div>
            <Image src={"/project4.jpeg"} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">Weather App</div>
          </div>
        </div>
      </section>
  );
};

export default Project;
