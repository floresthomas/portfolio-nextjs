import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-[#256D85] to-gray-800"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-white">
            Hi, my name is Thomas Ezequiel Flores
          </h1>
          <h1 className="py-2 justify-center text-[#094157]">
            <Typewriter
              options={{
                strings: ["A full stack developer"],
                changeDelay: 3,
                changeDeleteSpeed: 2,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-4 text-white font-bold sm:max-w-[70%] m-auto">
            I would like to help you in any project you need, it would be a
            pleasure for me to offer you my knowledge to build your idea through
            programming
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="w-32  mx-auto p-2 justify-center  group text-white  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
