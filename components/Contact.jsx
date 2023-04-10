import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-10">
            Contact
          </p>
          <p className="text-xl mt-4 py-4 text-gray-300">
            If you want to contact me, you can do it through this form:
          </p>
        </div>

        <div className="flex flex-row justify-center items-center mt-10">
          <a
            href="https://www.linkedin.com/in/floresthomas/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="text-4xl sm:text-6xl mx-2 hover:text-blue-500 duration-300" />
          </a>
          <a
            href="https://github.com/floresthomas"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub className="text-4xl sm:text-6xl mx-2 hover:text-gray-700 duration-300" />
          </a>
          
          <a
            href="https://drive.google.com/file/d/1FZd7AcNu3UMCBdydI3rRbHAN6LqO0vLo/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsFillPersonLinesFill className="text-4xl mx-2 sm:text-6xl hover:text-yellow-300 duration-300" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
