import React from "react";
import Resume from "./Resume";
import { SiKeras, SiTailwindcss, SiTensorflow } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="bg-[#2a2c39] md:h-[100vh] relative">
      <div className="max-w-5xl md:mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 h-full m-5 md:m-0">
        <div className="flex flex-col justify-center gap-10">
          <div className="text-lg text-gray-500 "> II Special Skills</div>
          <div className="md:text-6xl text-3xl">My Special Skill</div>
          <div className="md:text-6xl text-3xl">Field Here.</div>
          <div className="hidden md:block">
            <Resume />
          </div>
        </div>
        <div className=" flex flex-col gap-5 justify-center items-center text-gray-500 md:text-lg text-base">
          <div className="group h-[100px] md:w-[80%] w-full bg-[#252734] p-5 flex justify-between gap-5 items-center shadow-lg cursor-pointer">
            <div className="flex gap-5 items-center">
              <GiArtificialIntelligence className="text-3xl" />
              <div className="py-2">Machine Learning</div>
            </div>
            <div className="hidden md:block p-2 shadow-lg bg-[#2a2c39] rounded">
              Details
            </div>
            <div className="hidden group-hover:flex absolute top-[50%-1.25rem] right-20 w-[20%] flex-col gap-5">
              <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
                <SiTensorflow className="text-3xl" />
                <div className="py-2">TensorFlow</div>
              </div>
              <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
                <SiKeras className="text-3xl" />
                <div className="py-2">Keras</div>
              </div>
            </div>
          </div>
          <div className="group h-[100px] md:w-[80%] w-full bg-[#252734] p-5 flex justify-between gap-5 items-center shadow-lg cursor-pointer">
            <div className="flex gap-5 items-center">
              <CgWebsite className="text-3xl" />
              <div className="py-2">Web Development</div>
            </div>
            <div className="hidden md:block p-2 shadow-lg bg-[#2a2c39] rounded">
              Details
            </div>
            <div className="hidden group-hover:flex absolute top-[50%-1.25rem] right-20 w-[20%] flex-col gap-5">
              <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
                <SiTailwindcss className="text-3xl" />
                <div className="py-2">Tailwind</div>
              </div>
              <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
                <TbBrandNextjs className="text-3xl" />
                <div className="py-2">NextJS</div>
              </div>
              <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
                <FaDatabase className="text-3xl" />
                <div className="py-2">MySQL</div>
              </div>
            </div>
          </div>
          <div className="group h-[100px] md:w-[80%] w-full bg-[#252734] p-5 flex justify-between gap-5 items-center shadow-lg cursor-pointer">
            <div className="flex gap-5 items-center">
              <GiArtificialIntelligence className="text-3xl" />
              <div className="py-2">Soft Skills</div>
            </div>
            <div className="hidden md:block p-2 shadow-lg bg-[#2a2c39] rounded">
              Details
            </div>
            <div className="hidden group-hover:flex absolute top-[50%-1.25rem] right-20 w-[20%] flex-col gap-5">
              <div className="h-[100px] w-full bg-[#252734] p-5 flex gap-5 items-center">
                <HiLightBulb className="text-3xl" />
                <div className="py-2">Problem Solving</div>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
