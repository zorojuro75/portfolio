
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
      
      <div className=" text-white flex flex-col">
          <Hero />
          <Skills />
          <Project />
          <Contact />
      </div>
  );
};

export default Page;
