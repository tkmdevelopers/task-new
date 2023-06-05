"use client";
import AnimatedTextCharacter from "./AnimatedText";
import { motion } from "framer-motion";
const Courses = () => {
  return (
    <motion.div
      initial={{ x: -700, scale: 0.7, opacity: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      className="flex gap-1 flex-col p-3"
    >
      <div
        id="Courses"
        className="mx-auto max-w-full rounded-none shadow-none flex flex-col justify-center items-center   "
      >
        <div className="flex flex-col gap-4 items-center justify-center max-w-lg w-full  ">
          <motion.div
            initial={{ x: -700, scale: 0.7, opacity: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            className="flex gap-1 flex-col p-3"
          >
            <AnimatedTextCharacter
              text={"Courses"}
              className="font-satoshi font-semibold text-4xl text-task_primary whitespace-normal break-words mt-6 "
            />
          </motion.div>
          <hr class="w-full h-1 mx-auto  bg-dash_line border-0 rounded  text-left"></hr>
          <div className="flex justify-around flex-row p-3 w-full">
            <div className="basis-1/3">
              <motion.div
                initial={{ x: -700, scale: 0.7, opacity: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                className="flex flex-col justify-start "
              >
                <AnimatedTextCharacter
                  text={"EBAC"}
                  className="font-satoshi font-semibold text-2xl text-task_primary whitespace-normal break-words  "
                />
                <ul className="max-w-md w-full space-y-1 ml-5 list-disc  list-inside text-">
                  <li className=" w-full font-quicksand font-normal text-base text-['#818181'] text-left p-2 ">
                    UI/UX Designer
                  </li>
                  <li className=" w-full font-quicksand font-normal text-base text-['#818181'] text-left p-2 ">
                    Wordpress
                  </li>
                  <li className=" w-full font-quicksand font-normal text-base text-['#818181'] text-left p-2 ">
                    UI Designer
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="w-20 flex justify-center basis-1/3 ">
              <hr class="w-1 h-full mx-auto  bg-dash_line2 border-0 rounded  text-left"></hr>
            </div>
            <motion.div
              initial={{ x: -700, scale: 0.7, opacity: 0 }}
              animate={{ x: 0 }}
              transition={{ duration: 4 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              className="flex flex-col justify-start "
            >
              <AnimatedTextCharacter
                text={"Udemy"}
                className="font-satoshi font-semibold text-2xl text-task_primary whitespace-normal break-words  "
              />
              <ul className="max-w-md w-full space-y-1 ml-5 list-disc list-inside ">
                <li className=" w-full font-quicksand font-normal text-base text-['#818181'] text-left p-2 ">
                  Pro Figma
                </li>
                <li className=" w-full font-quicksand font-normal text-base text-['#818181'] text-left p-2 ">
                  Ingles
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Courses;
