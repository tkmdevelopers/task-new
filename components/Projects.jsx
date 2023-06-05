"use client";
import { useEffect, useState } from "react";
import { useViewport } from "@/hooks/ViewportProvider";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { FaGithub, FaLink } from "react-icons/fa";
import AnimatedTextCharacter from "./AnimatedText";
import { motion } from "framer-motion";
const projects = [
  {
    image: "/project1.png",
    title: "Spotify Explore Music!",
    descrption:
      "Welcome to Spotify, the cutting-edge music streaming platform designed to bring the joy of music to your fingertips. With its sleek and intuitive interface..",
  },
  {
    image: "/project2.png",
    title: "Spotify Playlist!",
    descrption:
      "Welcome to Spotify, the cutting-edge music streaming platform designed to bring the joy of music to your fingertips. With its sleek and intuitive interface.",
  },
  {
    image: "/project1.png",
    title: "Spotify App Clone!",
    descrption:
      "Welcome to Spotify, the cutting-edge music streaming platform designed to bring the joy of music to your fingertips. With its sleek and intuitive interface.",
  },
];

export default function Projects() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  try {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  } catch {
    console.log();
  }
  const breakpoint = 768;

  return width < breakpoint ? (
    <motion.div
      initial={{ x: -700, scale: 0.7, opacity: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      className="flex gap-1 flex-col p-3"
    >
      <div id="Projects" className=" m-8">
        <div className="flex-col flex w-[250px]  mb-10 gap-2">
          <AnimatedTextCharacter
            text={"My Projects"}
            className="font-satoshi font-semibold text-4xl text-task_primary whitespace-normal break-words text-left mt-6  "
          />

          <hr class="w-full h-1 mx-auto  bg-dash_line border-0 rounded  text-left"></hr>
        </div>
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex gap-1 flex-col p-3"
        >
          <Carousel
            autoplay={true}
            loop={true}
            className="rounded-xl "
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-10 flex-col justify-center items-center">
                <div className="flex flex-row gap-8 p-2 border-none rounded-2xl bg-black/50">
                  <FaGithub
                    color="#fff"
                    size={24}
                    className="ml-2 opacity-50 hover:opacity-100 cursor-pointer"
                  />
                  <div className="flex flex-row gap-2 opacity-50 hover:opacity-100 cursor-pointer">
                    <FaLink color="#fff" size={24} className="ml-2 " />
                    <h1 className="font-semibold text-white font-quicksand text-base ">
                      Preview
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <>
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i
                            ? "bg-task_primary w-8"
                            : "bg-gray-800 w-4"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    </>
                  ))}
                </div>
              </div>
            )}
          >
            {projects.map((project, i) => {
              return (
                <img
                  key={i}
                  src={project.image}
                  alt={`image ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              );
            })}
          </Carousel>{" "}
        </motion.div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ x: -700, scale: 0.7, opacity: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      className="flex gap-1 flex-col p-3"
    >
      <div id="Projects" className="m-8">
        <div className="flex-col flex w-[250px] ml-10 mb-10 gap-2">
          <motion.div
            initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            className="flex gap-1 flex-col p-3"
          >
            <AnimatedTextCharacter
              text={"My Projects"}
              className="font-satoshi font-semibold text-4xl text-task_primary whitespace-normal break-words text-left mt-6  "
            />{" "}
          </motion.div>
          <hr class="w-full h-1 mx-auto  bg-dash_line border-0 rounded  text-left"></hr>
        </div>
        <motion.div
          initial={{ x: -700, scale: 0.7, opacity: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          className="flex gap-1 flex-col p-3"
        >
          <Carousel autoplay={true} loop={true} className="rounded-xl">
            {projects.map((project, i) => {
              return (
                <div key={i} className="relative h-full w-full">
                  <img
                    src={project.image}
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                      <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                      >
                        {project.descrption}
                      </Typography>
                      <div className="flex justify-center gap-2">
                        <Button
                          size="lg"
                          className="flex flex-row items-center gap-2"
                          color="white"
                        >
                          Go to the Repo <FaGithub size={24} className="ml-2" />
                        </Button>

                        <Button size="lg" color="white" variant="text">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </motion.div>
      </div>
    </motion.div>
  );
}
