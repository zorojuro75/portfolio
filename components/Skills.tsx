import React from "react";
import Resume from "./Resume";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="bg-[#2a2c39] md:h-[100vh]">
      <div className="bg-[#2a2c39] max-w-5xl md:mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 h-full m-5 md:m-0">
        <div className="flex flex-col justify-center gap-10">
          <div className="text-lg text-gray-500 "> II Special Skills</div>
          <div className="md:text-6xl text-3xl">My Special Skill</div>
          <div className="md:text-6xl text-3xl">Field Here.</div>
          <div className="hidden md:block">
          <Resume />
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center text-gray-500 text-lg">
          <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
            <HiLightBulb className="text-3xl" />
            <div className="py-2">Problem Solving</div>
          </div>
          <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
            <TbBrandNextjs className="text-3xl" />
            <div className="py-2">NextJS</div>
          </div>
          <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
            <SiTailwindcss className="text-3xl" />
            <div className="py-2">Tailwind</div>
          </div>
          <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
            <FaDatabase className="text-3xl" />
            <div className="py-2">MySQL</div>
          </div>
          <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
            <MdManageAccounts className="text-3xl" />
            <div className="py-2">Leadership</div>
          </div>
          <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
            <RiTeamFill className="text-3xl" />
            <div className="py-2">Teamwork</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
