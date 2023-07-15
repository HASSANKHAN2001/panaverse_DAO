import React from "react";
import Image from "next/image";
import arif1 from "public/arif1.webp";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "../../util/motion";
import Link from "next/link";

const ArifAbout = () => {
  return (
    <div>
      <div className="bg-black md:mt-24 pb-4 ">
        <motion.div
          variants={zoomIn(0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-[64px] flex items-center justify-center"
        >
          <Image src={arif1} width={300} height={200} alt="arif" />
        </motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
          className="text-center text-white"
        >
          <h1 className="text-2xl font-bold">Dr. Arif Alvi</h1>
          <p className="text-xl font-semibold my-2 mx-2">
            President of the Islamic Republic of Pakistan
          </p>
          <div className="flex text-cnter justify-center">
            <Link
              className="hover:scale-105 duration-300"
              target="___blank"
              href="https://www.facebook.com/Dr.ArifAlvi/"
            >
              <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
                <BsFacebook className="h-8 w-8 fill-teal-200/80" />
              </div>
            </Link>
            <Link
              className="hover:scale-105 duration-300"
              target="___blank"
              href="https://twitter.com/ArifAlvi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
              <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
                <BsTwitter className="h-8 w-8 fill-teal-200/80" />
              </div>
            </Link>
            <Link
              className="hover:scale-105 duration-300"
              target="___blank"
              href="https://www.instagram.com/dr.arifalvi/?hl=en"
            >
              <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
                <BsInstagram className="h-8 w-8 fill-teal-200/80" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArifAbout;
