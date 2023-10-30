"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Bachelor of Engineering</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">MERN-stack web development </span>.{" "} <br/>
       <span className="font-lite">  i love</span> the
        feeling of finally Creating Best websites. Committed to clean code and delivering exceptional user experiences. Let's connect and build the future of the web together!. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js,
        </span>
        . I am also familiar with <span className="font-medium">TypeScript</span> and <span className="font-medium">Firebase</span>. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        
        <span className="font-lite">I am currently
        learning about <span className="font-medium"> Backend <span className="font-normal">like</span> Node-je, Express-js, MongoDb</span></span>.
       
      </p>
    </motion.section>
  );
}
