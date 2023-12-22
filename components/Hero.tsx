import React from "react";
import Resume from "./Resume";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id="#"
      className="max-w-4xl mx-auto flex flex-col gap-10 justify-center h-[90vh] relative"
    >
      <div className="md:text-8xl text-3xl">Hello! I&apos;m</div>
      <div className="md:text-8xl text-3xl">Sayed Al Banna</div>
      <div className="text-lg text-gray-500 my-5">
        Web developer specializing in NextJS
      </div>
      <Resume />
    </section>
  );
};

export default Hero;
