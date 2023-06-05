"use client";
import AnimatedTextCharacter from "./AnimatedText";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div className="mx-auto max-w-full rounded-none shadow-none flex flex-col justify-center items-center   ">
      <div className="flex flex-col gap-4 items-center justify-center max-w-lg w-full  ">
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex gap-1 flex-col p-3"
        >
          <AnimatedTextCharacter
            text={"Hello there!"}
            className="font-satoshi text-center font-semibold text-4xl text-task_primary whitespace-normal break-words mt-6 "
          />

          <hr class="w-full h-1 mx-auto  bg-dash_line border-0 rounded  text-left"></hr>
        </motion.div>
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex gap-1 flex-col p-3"
        >
          <p className="font-quicksand font-normal text-base text-['#818181'] text-left p-2 ">
            I have always been fascinated by the intersection of design and
            technology.My journey began with a background in graphic
            design,where I honed my skills in visual communication and
            storytelling.
          </p>
          <p className="font-quicksand font-normal text-base text-['#818181'] text-left p-2 ">
            As a Junior Designer, I&apos;m eager to learn and grow, constantly
            pushing the boundaries of my creativity.
          </p>
          <p className="font-quicksand font-normal text-base ttext-['#818181'] text-left p-2 ">
            I&apos;m excited about the ever-evolving nature of the UI/UX field
            and the opportunity to contribute to the creation of products that
            positively impact people&apos;s lives.
          </p>
          <p className="font-quicksand font-normal text-base text-task_primary  text-right p-2 ">
            #contemigo
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
