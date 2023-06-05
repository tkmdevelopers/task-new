"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { links } from "./navData";
function NavList() {
  return (
    <ul className=" my-2 flex justify-center flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link, index) => {
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Typography
              key={index}
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium font-quicksand text-base     "
            >
              <a
                href={`#${link}`}
                className="flex items-center hover:text-task_primary group text-black transition-all duration-300 ease-in-out   "
              >
                <span className="bg-left-bottom bg-gradient-to-r from-task_primary to-task_primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {link}
                </span>
              </a>
            </Typography>
          </motion.div>
        );
      })}
    </ul>
  );
}

export default function RootNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full rounded-none shadow-none">
      <div className="flex items-center text-black">
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex justify-center   basis-1/4 "
        >
          <Image width={80} height={51} src="/logo.png" />
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          initial={{ x: 2000, scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="felx basis-3/4  w-full hidden lg:block"
        >
          <NavList />
        </motion.div>
        <motion.IconButton
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          initial={{ opacity: 0.2, scale: 0.1, x: 800 }}
          whileInView={{ scale: 1, opacity: 1 }}
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </motion.IconButton>
      </div>
      <AnimatePresence>
        <Collapse open={openNav}>
          {openNav && (
            <>
              <motion.div
                key="modal"
                initial={{ y: 300, opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ul className="my-2 flex-col flex justify-center items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  {links.map((link, index) => {
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Typography
                          key={index}
                          as="li"
                          variant="small"
                          color="blue-gray"
                          className="p-1 font-medium font-quicksand text-base     "
                        >
                          <a
                            href={`#${link}`}
                            className="flex items-center hover:text-task_primary group text-black transition-all duration-300 ease-in-out   "
                          >
                            <span className="bg-left-bottom bg-gradient-to-r from-task_primary to-task_primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                              {link}
                            </span>
                          </a>
                        </Typography>
                      </motion.div>
                    );
                  })}
                </ul>
              </motion.div>
            </>
          )}
        </Collapse>
      </AnimatePresence>
    </Navbar>
  );
}
