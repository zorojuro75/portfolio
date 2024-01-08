import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
type Props = {};

const Project = (props: Props) => {
  let projects = [
    {
      img: "/project1.jpeg",
      title: "League of Engineers",
      description: "A website for League of Engineers",
      link: "https://league-of-engineers.jukti.club",
      github: "https://github.com/zorojuro75/league-of-engineers",
    },
    {
      img: "/project2.jpeg",
      title: "Trello Clone",
      description: "A clone of Trello",
      link: "https://trello-clone-zorojuro75.vercel.app",
      github: "https://github.com/zorojuro75/trello-clone",
    },
    {
      img: "/project4.jpeg",
      title: "Weather App",
      description: "A weather app",
      link: "https://weather-app-zorojuro75.vercel.app",
      github: "https://github.com/zorojuro75/weather-app",
    },
    {
      img: "/project3.png",
      title: "JUKTI",
      description: "A website for JUKTI",
      link: "https://jukti.club",
      github: "https://github.com/zorojuro75/jukti",
    },
    {
      img: "/project5.jpeg",
      title: "Weather Dashboard",
      description: "A weather dashboard",
      link: "https://weather-zorojuro75.000webhostapp.com",
      github: "https://github.com/zorojuro75/weather-dashboard",
    },
    {
      img: "/project6.png",
      title: "Food Menu",
      description: "A weather dashboard",
      link: "https://food-menu-kappa-five.vercel.app",
      github: "https://github.com/zorojuro75/Food-Menu",
    },
  ];
  return (
    <section
      id="projects"
      className="max-w-8xl md:mx-auto flex flex-col justify-center mx-5 my-5 py-10"
    >
      <div className="text-lg text-gray-500 "> II My Awesome Projects</div>
      <div className="md:text-5xl text-3xl">My Completed Projects</div>
      <div className="grid md:grid-cols-3 gap-5 md:mt-20 mt-5">
        {projects.map((project, index) => (
          <div className="bg-[#2a2c39] p-10 shadow-lg" key={index}>
            <div className="py-2 text-xl flex gap-2 justify-end">
              <a href={project.link} target="_blank" rel="noreferrer">
                <IoIosLink />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
            <Image src={project.img} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
