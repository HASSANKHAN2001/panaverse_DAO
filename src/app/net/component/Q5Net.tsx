import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant2, slideIn, zoom } from "../../util/motion";

const Q4Iot = () => {
  return (
    <div className="my-1 py-8 px-2 mx-1 leading-loose bg-gradient-to-r from-white via-teal-100/70 to-green-100/70 text-black ">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-semibold text-center my-4"
      >
        Quarter 5
      </motion.h1>

      <motion.h2
        variants={slideIn("left", "spring", 0.8, 1.5)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-xl
 text-teal-800  underline underline-offset-4"
      >
        NPA-361: Network Programmability and Automation
      </motion.h2>
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="font-bold lg:text-5xl md:text-5xl text-2xl
 my-4"
      >
        Course Description:
      </motion.h1>

      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal"
      >
        Traditional network management techniques can not be effectively
        automated and do not scale well. By implementing network programmability
        based on Application Programming Interfaces, this course will assist in
        overcoming issues of the future and help you develop the skills required
        for the Next-Generation Network Engineer.
      </motion.p>

      <motion.div
        variants={zoom("up", "bounce")}
        initial="hidden"
        whileInView="show"
        className="mt-8  border-teal-700 rounded-xl border-2 flex lg:flex-row md:flex-row flex-col lg:w-2/4 w-full "
      >
        <div className="lg:w-2/4 md:w-2/4 w-full font-bold text-3xl  text-teal-900 lg:h-40 lg:py-14 lg:px-6 md:h-40 md:py-14 md:px-8 px-6  py-6">
          Specialized Track
        </div>
        <div className="bg-gradient-to-r from-teal-800/70 to-green-500/70 md:w-2/4 lg:w-2/4 w-full text-white font-semibold text-2xl md:py-10 lg:px-12 lg:py-10 md:px-12 px-6 py-6">
          <h1>Duration</h1>
          <h3 className="lg:my-2 md:my-2 ">13 Weeks</h3>
        </div>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="font-bold lg:text-5xl md:text-5xl text-2xl
 my-8"
      >
        Course Outline:
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-2 mt-4">
          Textbook:
        </h2>
        <Link
          className="lg:text-xl md:text-xl text-base
font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3"
          target={"_blank"}
        >
          https://www.amazon.com/Network-Programmability-Automation-Networking-
          <br />
          Technology/dp/1587145146/ref=sr_1_3
        </Link>
      </motion.div>
    </div>
  );
};

export default Q4Iot;
