"use client";
import React from "react";
import Link from "next/link";
import Video from "./Video";
import { slideIn, textVariant2 } from "../src/app/util/motion";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <div>
      <motion.div
        variants={slideIn("left", "tween", 1.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className=" md:mx-2 md:my-20  py-2 mx-2 px-1 text-black"
      >
        <h1 className="text-teal-900  text-4xl font-extrabold  py-2 my-2 text-center">
          The Program in a Nutshell
        </h1>
        <h3 className="text-center  text-2xl font-semibold  py-2 md:my-2 my-4 text-teal-800">
          Earn While You Learn
        </h3>
        <div className=" text-center   font-bold  text-lg py-2 my-2 px-4 md:px-20 ">
          <p>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the
          </p>
          <p>
            classroom and will begin doing so within six months of the program's
            beginning. It resembles a cross
          </p>
          <p>between a corporate venture and an educational project.</p>
        </div>
      </motion.div>

      <div className="md:bg-gradient-to-r md:from-white md:to-teal-100/70 bg-gradient-to-b from-white to-teal-100/70 flex flex-col md:flex-col   lg:flex-row justify-between w-full md:mx-2 md:my-8  my-4 ">
        <motion.div
          variants={slideIn("left", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
          className="sm:shrink-0  md:shrink-0 lg:w-2/4 lg:h-2/4 sm:w-full sm:h-full md:mx-1 px-1 py-1 md:py-0 md:px-0 md:w-full md:h-full"
        >
          <Video />
        </motion.div>
        <div className=" px-2">
          <motion.div
            variants={slideIn("right", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
          >
            <h1 className="text-black  text-4xl font-extrabold  py-2  my-1">
              Achieve Your <span className="text-teal-800">Goals</span>
            </h1>
          </motion.div>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <p className="font-semibold  text-lg mt-2 text-black">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first two quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </p>

            <Link target={"_blank"} href="https://portal.piaic.org/signup">
              <button className=" animate-bounce my-4 md:mt-4 py-2  px-4 rounded transition  bg-teal-800  text-white delay-700 text-xl font-bold ">
                Enroll Now
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section;
