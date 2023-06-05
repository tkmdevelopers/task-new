"use client";
import React from "react";
import AnimatedTextCharacter from "./AnimatedText";
import { motion } from "framer-motion";
const skillData = [
  {
    name: "Figma",
    image: "/figma.png",
    description:
      "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
  },
  {
    name: "Github",
    image: "/github.png",
    description:
      "GitHub, Inc. is an Internet hosting service for software development and version control using Git.",
  },
  {
    name: "Elementor",
    image: "/elementor.png",
    description:
      "The Elementor website builder lets WordPress users create and edit websites with a responsive drag-and-drop technique.",
  },
  {
    name: "VSCode",
    image: "/vscode.png",
    description:
      "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
  },
  {
    name: "Bootstrap",
    image: "/bootstrap.png",
    description:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It",
  },
  {
    name: "Wordpress",
    image: "/wordpress.png",
    description:
      "At its core, WordPress is the simplest, most popular way to create your own website or blog.",
  },
];
const Skills = () => {
  return (
    <div id="Skills">
      <div className="h-full w-full rounded-none shadow-none bg-[url('/skills_background.png')] bg-cover bg-no-repeat flex flex-col gap-10  ">
        <div className="w-[200px] self-start ml-10 mt-10">
          <div className="flex-col flex w-[250px] ml-8 mb-10 gap-2">
            <motion.div
              initial={{ x: -700, scale: 0.7, opacity: 0 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              className="flex gap-1 flex-col p-3"
            >
              <AnimatedTextCharacter
                text={"Skills"}
                className="font-satoshi font-normal text-4xl text-white whitespace-normal break-words text-left mt-6  "
              />
            </motion.div>
            <hr class="w-full h-1 mx-auto  bg-dash_line border-0 rounded   text-left"></hr>
          </div>
        </div>
        <div className="grid  grid-flow-row grid-rows-2 justify-center justify-items-center align-middle grid-cols-1 lg:grid-cols-2  xl:grid-cols-3   p-20 gap-20">
          {" "}
          {skillData.map((skill) => {
            return (
              <>
                <SkillCard
                  image={skill.image}
                  name={skill.name}
                  description={skill.description}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ image, name, description }) => {
  return (
    <motion.div
      initial={{ x: -700, scale: 0.7, opacity: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      className="flex gap-1 flex-col p-3"
    >
      <div className="w-[300px] h-[350px] flex flex-col items-center justify-center  bg-transparent ">
        <div className="w-full  flex justify-center items-center bg-black ">
          <img src={image} className="w-[130px] h-[130px] absolute   " alt="" />
        </div>
        <div className="h-full w-full rounded-2xl bg-white flex justify-center  flex-col p-6 gap-4 ">
          <div className="w-full h-[40px]">
            <AnimatedTextCharacter
              text={name}
              className="font-satoshi font-semibold text-4xl text-task_primary whitespace-normal break-words text-left  "
            />
          </div>
          <div className="w-full h-[40px]">
            <p className="font-quicksand font-normal text-base ttext-['#818181'] text-left ">
              {description}
            </p>
          </div>
        </div>
      </div>{" "}
    </motion.div>
  );
};
export default Skills;
