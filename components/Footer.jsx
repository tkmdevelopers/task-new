"use client";
import AnimatedTextCharacter from "./AnimatedText";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div
      id="Contact"
      className="h-full w-full rounded-none shadow-none bg-[url('/background.png')] bg-cover bg-no-repeat  flex flex-col   py-8 gap-6    "
    >
      <div className=" flex basis-full justify-evenly  flex-row  ">
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className=" flex items-end   basis-1/4  "
        >
          <img
            src="/logo-white.png"
            className=" lg:w-[98px] lg:h-[76px] w-[78px] h-[56px]"
          />
        </motion.div>
        <div className="basis-1/3">
          <div className=" flex  gap-4 flex-col justify-start">
            <h1 className="font-satoshi text-lg text-white ">My Socials</h1>
            <div className="flex flex-row gap-8 lg:gap-16 p-5">
              <motion.div
                initial={{ x: -700, scale: 0.7, opacity: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                className="flex h-[60px] items-center  flex-col  gap-3"
              >
                <img
                  className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] "
                  src="/discord.png"
                />
                <h1 className=" font-quicksand text-center text-white">
                  #HelxSiena1734s
                </h1>
              </motion.div>
              <motion.div
                initial={{ x: -700, scale: 0.7, opacity: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 2.5 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                className="flex h-[60px]  items-center  flex-col  gap-3"
              >
                <img
                  className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] "
                  src="/instagram.png"
                />
                <h1 className=" font-quicksand  text-center text-white">
                  @hellxsiena
                </h1>
              </motion.div>
              <motion.div
                initial={{ x: -700, scale: 0.7, opacity: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 4 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                className="flex h-[60px]  flex-col items-center  gap-3"
              >
                <img
                  className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] "
                  src="/LinkedIn.png"
                />
                <h1 className=" font-quicksand   text-center text-white">
                  Helena Siena
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <hr class="w-full h-[1px] mx-auto  bg-dash_line border-0 rounded mt-10 text-left"></hr>
      <motion.div
        initial={{ x: -700, scale: 0.7, opacity: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        className="basis-full"
      >
        <div className="flex justify-center items-center flex-row gap-2">
          <img className="w-[30px] h-[30px]" src="/code.png" alt="" />
          <h1 className="text-base text-white font-quicksand">
            Helena Siena - Todos os direitos reservados - 2023
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
