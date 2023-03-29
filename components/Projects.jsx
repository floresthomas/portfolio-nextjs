import React from "react";
import Image from "next/image";
import pokemon from "../public/assets/images/pokemon.png";
import kalu from "../public/assets/images/kalu.png";
import videogames from "../public/assets/images/videogames.png";
import ecommerce from "../public/assets/images/ecommerce.png";

const Projects = () => {
  return (
    <div
      name="portfolio"
      className="bg-[#47B5FF] w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <Image
              className="rounded-md duration-200 hover:scale-105"
              src={pokemon}
              alt="/"
              width={500}
              height={100}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="https://pokemons-react-app.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="https://github.com/floresthomas/PI-Pokemon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <Image
              className="rounded-md duration-200 hover:scale-105"
              src={kalu}
              alt="/"
              width={500}
              height={100}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="https://kalo-arg.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a onClick={() => alert("Code is private")}>Repository</a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <Image
              className="rounded-md duration-200 hover:scale-105"
              src={videogames}
              alt="/"
              width={500}
              height={100}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="https://react-videogames-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="https://github.com/floresthomas/PI-Videogames"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <Image
              className="rounded-md duration-200 hover:scale-105"
              src={ecommerce}
              alt="/"
              width={500}
              height={100}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="https://github.com/floresthomas/ecommerce-client"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
