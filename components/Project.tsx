import Image from "next/image";
import React from "react";
type Props = {};

const Project = (props: Props) => {
  return (
    <>
      <section
        id="projects"
        className="max-w-5xl md:mx-auto md:h-[100vh] flex flex-col justify-center mx-5 md:my-0 my-5"
      >
        <div className="text-lg text-gray-500 "> II My Awesome Projects</div>
        <div className="md:text-5xl text-3xl">My Completed Projects</div>
        <div className="grid md:grid-cols-2 gap-5 md:mt-20 mt-5">
          <div className="bg-[#2a2c39] p-10 shadow-lg">
            <Image src={"/project1.jpeg"} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">League of Engineers</div>
          </div>
          <div className="bg-[#2a2c39] p-10 shadow-lg">
            <Image src={"/project2.jpeg"} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">Trello 2.0</div>
          </div>
          <div className="bg-[#2a2c39] p-10 shadow-lg">
            <Image src={"/project3.png"} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">JUKTI</div>
          </div>
          <div className="bg-[#2a2c39] p-10 shadow-lg">
            <Image src={"/project4.jpeg"} width={500} height={1} alt="" />
            <div className="text-center md:text-3xl p-2">Weather App</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
