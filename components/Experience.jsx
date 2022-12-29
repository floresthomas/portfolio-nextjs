import React from "react";
import Image from "next/image";
import html from "../public/assets/images/html.png"
import css from "../public/assets/images/css.png"
import javascript from "../public/assets/images/javascript.png"
import react from "../public/assets/images/react.png"
import node from "../public/assets/images/node.png"
import mongo from "../public/assets/images/mongo.png"
import github from "../public/assets/images/github.png"
import git from "../public/assets/images/git.png"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-500'
        },        {
            id: 5,
            src: node,
            title: 'Node',
            style: 'shadow-green-500'
        },        {
            id: 6,
            src: mongo,
            title: 'Mongo',
            style: 'shadow-green-500'
        },        {
            id: 7,
            src: github,
            title: 'Github',
            style: 'shadow-gray-500'
        },        {
            id: 8,
            src: git,
            title: 'Git',
            style: 'shadow-red-500'
        },
    ]

    return (
        <div name="experience" className="bg-[#06283D] w-full h-screen md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
                <div className="mt-10">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-20">Experience</p>
                    <p className="py-6">These are technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-3 px-1 sm:px-0">
                    {
                        techs.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <Image src={src} width={80} height={80} className="mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience