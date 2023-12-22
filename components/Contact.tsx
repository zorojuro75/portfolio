import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { SocialIcon } from "react-social-icons";
type Props = {};

const Contact = (props: Props) => {
  let social = [
    "https://github.com/zorojuro75",
    "https://www.facebook.com/sayedal.banna.75",
    "https://www.linkedin.com/in/sayed-al-banna-2419211a8/",
  ];
  return (
    <div className="bg-[#2a2c39]">
      <section
        id="contact"
        className="bg-[#2a2c39] max-w-5xl md:mx-auto h-[60vh] flex flex-col items-center justify-center gap-5 mx-5"
      >
        <h1 className="md:text-6xl text-3xl text-center py-10">Contact Me</h1>

          <div className="flex md:text-xl justify-center items-center gap-2">
            <FaPhoneVolume />
            <div>01321082885</div>
          </div>
          <div className="flex md:text-xl justify-center items-center gap-2">
            <IoMailSharp />
            <div>smasayedalbanna75@gmail.com</div>
          </div>
        <div className="flex gap-5">
          {social.map((item) => (
            <div
              key={item}
              className="border p-2 rounded-full hover:bg-gray-600"
            >
              <SocialIcon url={item} bgColor="transparent" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
