'use client'
import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { saveAs } from "file-saver";
type Props = {}

const Resume = (props: Props) => {
  const saveFile = () => {
    saveAs(
      "/cv.pdf",
      "sayed-al-banna-cv.pdf"
    );
  };
  return (
    <div className="w-fit text-sm border py-5 px-10 rounded-full border-gray-600 hover:bg-[#2d2f3b] text-gray-500 hover:text-gray-200 flex gap-3 items-center justify-center shadow-lg hover:shadow-2xl cursor-pointer" onClick={saveFile}>
        Get Resume
        <FaDownload />
      </div>
  )
}
export default Resume