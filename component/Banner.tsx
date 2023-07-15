"use client";

import React from "react";
import Image from "next/image";
import R1 from "../public/R1.jpeg";
import { textVariant2, slideIn, zoomIn } from "../src/app/util/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex md:flex-col flex-col lg:flex-row justify-between py-4  md:my-[90px] lg:mx-2   lg:my-[92px]  my-[62px] mx-2 md:bg-gradient-to-r md:from-teal-100/70 md:to-white bg-gradient-to-b from-teal-100/70 to-white text-black">
      <div className=" md:px-2.5  md:mx-0 mx-1 px-2 md:pt-8 mb-2 ">
        <motion.div
          variants={slideIn("left", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <h3 className=" underline-offset-8 text-xl font-semibold text-teal-800 no-underline md:underline my-2">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h3>
        </motion.div>
        <motion.div
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="text-black"
        >
          <h1 className="text-black text-xl font-bold md:text-4xl md:font-extrabold my-4">
            Certified Web 3.0 and Metaverse Developer
          </h1>
          <p className="font-semibold text-lg    my-2">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet
          </p>
          <p className="font-semibold  text-lg mt-4  ">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </p>
          <div>
            <Link target={"_blank"} href="https://www.piaic.org">
              <button className=" my-4 md:mt-6 py-2  px-4 rounded transition ease-in delay-150 bg-teal-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-900 text-white duration-300 text-xl font-bold ">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={zoomIn(0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="md:mx-1 px-1 py-1 md:py-0 md:px-0 md:w-full md:h-full"
      >
        <Image src={R1} width={950} height={660} alt="music" />
      </motion.div>
    </div>
  );
};

export default Banner;
