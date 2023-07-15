"use client";
// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "./page.module.css";
import Banner from "component/Banner";
import Section from "component/Section";
import SpecializeTrack1 from "component/SpecializeTrack1";

import Footer from "component/Footer";
import Outcome from "component/Outcome";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Banner />
      <Section />
      <SpecializeTrack1 />
      <Outcome />
      <Footer />
    </div>
  );
}
