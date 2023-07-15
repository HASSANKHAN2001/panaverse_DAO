"use client";

import React from "react";
import Image from "next/image";
import A from "../public/A.jpg";
import WEB3 from "../public/WEB3.webp";
import IOT from "../public/IOT.webp";
import cloud from "../public/cloud.jpg";
import { motion } from "framer-motion";
import { slideIn, zoom1, zoom2, zoom3, zoom4 } from "../src/app/util/motion";
import Link from "next/link";

const SpecializeTrack1 = () => {
  return (
    <div>
      <div className=" md:mx-2 md:my-20 my-4 pt-2 pb-0 mx-2 px-1 text-black">
        <motion.div
          variants={slideIn("left", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="text-teal-900  text-4xl font-extrabold  py-2 my-2 text-center">
            Specialized Tracks:
          </h1>
          <h3 className="text-center  text-2xl font-semibold  py-2 md:my-2 my-4 text-teal-800">
            Earn While You Learn
          </h3>
          <div
            className=" text-center   font-bold  lg:text-xl md:text-xl text-lg
 py-2 my-2 px-4 mx-auto text-black"
          >
            <p>
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each.
            </p>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gird-cols-1 lg:grid-cols-4 justify-items-center bg-transparent py-12  md:my-8 md:mb-20">
          <motion.div
            variants={zoom1("down", "bounce")}
            initial="hidden"
            whileInView="show"
            className="lg:h-[360px] md:h-[360px]   bg-gradient-to-b from-white to-teal-100/70 rounded md:w-2/3  shadow-xl shadow-slate-400  my-2 mx-2 px-3 pt-3 pb-1"
          >
            <div className="md:pt-2  md:pb-1 mt-2 py-2 object-cover ">
              <Image
                className="rounded"
                src={cloud}
                width={350}
                height={100}
                alt="Cloud Computing"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold md:mt-2 my-4 text-teal-800 underline decoration-teal-800 underline-offset-8">
                Specialized Track:
              </h1>
              <h1 className="text-black  text-lg font-bold mt-3  ">
                Cloud-Native Computing Specialization:
              </h1>

              <div className="mt-6">
                <Link href="cloud">
                  <button className="w-full lg:mt-2 md:mt-4 py-2  px-4 rounded border border-teal-800 transition ease-in delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-50 text-teal-800 duration-300 text-xl font-bold ">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={zoom2("down", "bounce")}
            initial="hidden"
            whileInView="show"
            className="lg:h-[400px] md:h-[400px] md:w-2/3 bg-gradient-to-b from-white to-teal-100/70 rounded   shadow-xl shadow-slate-400  my-2 mx-2 px-3 pt-3 pb-1"
          >
            <div className="md:pt-2  md:pb-1 mt-2 py-2 object-cover ">
              <Image
                className="rounded"
                src={IOT}
                width={350}
                height={100}
                alt="IOT"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold md:mt-2 mt-4 text-teal-800 underline decoration-teal-800 underline-offset-8">
                Specialized Track:
              </h1>
              <h1 className="text-black  text-lg font-bold mt-3  ">
                Ambient Computing and IoT Specialization:
              </h1>

              <div className="mt-6 ">
                <Link href="iot">
                  <button className="w-full lg:my-12 md:mt-6 py-2  px-4 rounded border border-teal-800 transition ease-in delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-50 text-teal-800 duration-300 text-xl font-bold ">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={zoom3("down", "bounce")}
            initial="hidden"
            whileInView="show"
            className="lg:h-[470px] md:h-[470px] bg-gradient-to-b from-white to-teal-100/70 rounded md:w-2/3  shadow-xl shadow-slate-400  my-2 mx-2 px-3 pt-3 pb-1"
          >
            <div className="md:pt-2  md:pb-1 object-cover ">
              <Image
                className="rounded"
                src={WEB3}
                width={350}
                height={100}
                alt="Web3"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold md:mt-2 my-4 text-teal-800 underline decoration-teal-800 underline-offset-8">
                Specialized Track:
              </h1>
              <h1 className="text-black  text-lg font-bold mt-3  ">
                Web 3.0 (Blockchain) and Metaverse Specialization:
              </h1>

              <div className="mt-6">
                <Link href="web3">
                  <button className="w-full lg:mt-10 mt-4 md:mt-9 py-2  px-4 rounded border border-teal-800 transition ease-in delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-50 text-teal-800 duration-300 text-xl font-bold ">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={zoom4("down", "bounce")}
            initial="hidden"
            whileInView="show"
            className="lg:h-[510px] md:h-[510px] bg-gradient-to-b from-white to-teal-100/70 rounded md:w-2/3  shadow-xl shadow-slate-400  my-2 mx-2 px-3 pt-3 pb-1"
          >
            <div className="md:pt-2  md:pb-1 object-cover  ">
              <Image
                className="rounded"
                src={A}
                width={350}
                height={100}
                alt="Artifical Intelligence"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold md:mt-2 my-4 text-teal-800 underline decoration-teal-800 underline-offset-8">
                Specialized Track:
              </h1>
              <h1 className="text-black  text-lg font-bold mt-3  ">
                Artificial Intelligence (AI) and Deep Learning Specialization:
              </h1>
            </div>
            <div className="mt-6">
              <Link href="ai">
                <button className="w-full lg:mt-[80px] md:mt-12 py-2  px-4 rounded border border-teal-800 transition ease-in delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-50 text-teal-800 duration-300 text-xl font-bold ">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpecializeTrack1;
