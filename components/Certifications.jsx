"use client";
import React from "react";
import AnimatedTextCharacter from "./AnimatedText";
import { motion } from "framer-motion";
const certifications = [
  {
    image: "/certification1.png",
  },
  {
    image: "/certification2.png",
  },
  {
    image: "/certification3.png",
  },
  {
    image: "/certification4.png",
  },
];
const Certifications = () => {
  return (
    <div id="Certifications">
      <div className="h-full w-full rounded-none shadow-none bg-[url('/background.png')] bg-cover bg-no-repeat flex flex-col   justify-center items-center gap-2">
        <div className="w-[200px] self-start ml-10 mt-10">
          <motion.div
            initial={{ x: -700, scale: 0.7, opacity: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            className="flex-col flex w-[250px] ml-8  gap-2"
          >
            <AnimatedTextCharacter
              text={"Certifications"}
              className="font-satoshi font-normal text-4xl text-white whitespace-normal break-words text-left mt-6  "
            />
            <hr class="w-full h-1 mx-auto  bg-dash_line border-0 rounded   text-left"></hr>
          </motion.div>
        </div>
        <div className="grid  grid-flow-row grid-rows-2 justify-center justify-items-center align-middle grid-cols-1 lg:grid-cols-1  xl:grid-cols-2   p-20 gap-20">
          {certifications.map((skill) => {
            return (
              <>
                <motion.div
                  initial={{ x: -700, scale: 0.7, opacity: 0 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2 }}
                  whileInView={{ scale: 1, opacity: 1, x: 0 }}
                  className="max-w-md"
                >
                  <img className="object-fill" src={skill.image} alt="" />
                </motion.div>
              </>
            );
          })}
        </div>
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex gap-1 flex-col p-3"
        >
          <button className="bg-button_bg max-w-[250px] h-[60px]  lg:max-w-[450px] w-full lg:h-[80px] rounded-xl">
            <AnimatedTextCharacter
              text={"Click to learn more..."}
              className={
                "font-satoshi font-bold   text-black text-base lg:text-lg"
              }
            />
          </button>
          <AnimatedTextCharacter
            text={`para acompanhar meu`}
            className={
              "font-quicksand font-normal   text-white text-base lg:text-lg"
            }
          />
          <AnimatedTextCharacter
            text={`desenvolvimento e minhas conquistas!`}
            className={
              "font-quicksand font-normal   text-white text-base lg:text-lg"
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
