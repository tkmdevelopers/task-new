"use client";
import AnimatedTextCharacter from "./AnimatedText";
import { motion } from "framer-motion";
const Portfolios = () => {
  return (
    <div
      id="Contact"
      className="mx-auto max-w-full rounded-none shadow-none flex flex-col justify-center items-center gap-8   "
    >
      <motion.div
        initial={{ x: -700, scale: 0.7, opacity: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        className="flex flex-col gap-4 items-center justify-center max-w-lg w-full  "
      >
        <AnimatedTextCharacter
          text={"Portfolios"}
          className="font-satoshi font-semibold text-4xl text-task_primary whitespace-normal break-words mt-6 "
        />
        <hr class="w-full h-1 mx-auto  bg-dash_line border-0 rounded  text-left"></hr>
      </motion.div>
      <motion.div
        initial={{ x: -700, scale: 0.7, opacity: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        className="flex gap-1 flex-col p-3"
      >
        <h1 className="font-quciksand font-normal text-xl lg:text-2xl text-[#191111] text-center whitespace-normal break-words ">
          Para conferir mais dos projetos, me acompanhe através dos meus
          portfólios
        </h1>
      </motion.div>
      <div className="w-full flex items-center justify-around lg:flex-row  flex-col gap-8 mb-10">
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <img
            className="w-[100px] h-[100px] lg:w-[131px] lg:h-[131px] "
            src="/github.png"
          />
          <h1 className="text-black font-quicksand text-2xl">Github</h1>
        </motion.div>
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 2.5 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <img
            className="w-[115px] h-[115px] lg:w-[131px] lg:h-[131px] "
            src="/figma.png"
          />
          <h1 className="text-black font-quicksand text-2xl">Figma</h1>
        </motion.div>
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 4 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <img
            className="w-[115px] h-[115px] lg:w-[131px] lg:h-[131px] "
            src="/vercel.png"
          />
          <h1 className="text-black font-quicksand text-xl text:2xl">Vercel</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolios;
