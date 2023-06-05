"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Avatar, Badge } from "@material-tailwind/react";
import AnimatedTextCharacter from "./AnimatedText";
const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      layout
      className="h-full w-full rounded-none shadow-none bg-[url('/background.png')] bg-cover bg-no-repeat  flex flex-col   py-8 gap-3  "
    >
      <motion.div
        layout
        className="flex flex-col lg:flex-row gap-10 lg:justify-center"
      >
        <motion.div
          layout
          initial={{ scale: 0.8, opacity: 0.7 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className=" flex justify-center items-center flex-col gap-2 "
        >
          <AnimatedTextCharacter
            text={"Helena"}
            className={"font-satoshi text-white text-4xl  lg:text-6xl"}
          />
          <AnimatedTextCharacter
            text={"Siena"}
            className={"font-satoshi text-white text-4xl  lg:text-6xl"}
          />
          <AnimatedTextCharacter
            text={"Web Designer Junior"}
            className={
              "font-quicksand font-light   text-task_secondary text-xs lg:text-base"
            }
          />
          <AnimatedTextCharacter
            text={" UI/UX Designer"}
            className={
              "font-quicksand font-light text-white texl-base lg:text-2xl"
            }
          />
        </motion.div>

        <motion.div
          layout
          initial={{ opacity: 0.2, scale: 0.6 }}
          transition={{ duration: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="  flex justify-center items-center flex-col gap-2"
        >
          <Badge
            content={
              <Image fill className="object-contain" src={"/status.png"} />
            }
            overlap="circular"
            className=" bg-transparent w-[110px] h-[110px] lg:w-[150px] lg:h-[150px]"
            placement="bottom-end"
          >
            <Avatar
              src="./profile2.png"
              alt="avatar"
              className=" h-[230px] w-[230px] lg:w-[300px] lg:h-[300px] justify-center items-center "
            />
          </Badge>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
