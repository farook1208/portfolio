import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import carrental from "@/public/car.png";
import twitterclone from "@/public/twitter.png"
import fbclone from "@/public/fbclone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated - BE ( Information Technology ) CGPA - 6.26",
    location: "Hyderabad",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "MERN-Stack Web Development",
    location: "Hyd- Digital lynk",
    description:
      "I enrolled in coding bootcamp and learned Mern -Stack web development. Has undergone training and completed course on MERN-Stak.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb-MAY 2023",
  },
  {
    title: "React-js developer",
    location: "Hyderabad",
    description:
      "I am always looking to learn new technologies. I am currently looking for a full-time position as a React-js developer.",
    icon: React.createElement(CgWorkAlt),
    date: " Fresher",
  },
  
] as const;

export const projectsData = [
  {
    title: "Car-Rental",
    description:
      "Here i build a car rental app using Next-js, React, Tailwind-css, GrapgQL, HyGraph,and TypeScript. We will start by setting up our project & installing the necessary dependencies. Then, create GrapgQL schema & API. ",
    tags: ["React", "Next.js", "Tailwind-css", "GraphQL", "HyGraph"],
    imageUrl: carrental,
    github: "https://github.com/farook1208/Car-Rental-website",
    project: "",
  },
  {
    title: "Portfolio-Website",
    description:
      "Creating a Facebook clone using Next.js, Tailwind CSS, and NextAuth.js involves building a web application that replicates some of the core features and functionalities of Facebook, such as user authentication, news feed, and user profiles.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "NextAuth"],
    imageUrl: fbclone,
    github: "https://github.com/farook1208/fb-clone",
    project: "",
  },

  {
    title: "Twitter-Clone",
    description:
      "1. Designed and developed a Twitter clone using next-js & Tailwind-css ,Firebase, showcasing expertise in modern web development framework & responsive design",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl:twitterclone ,
    github: "https://github.com/farook1208/Twitter-clone",
    project: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind-CSS",
  "JavaScript",
  "React-js",
  "Next.js",
  "Firbase"
] as const;
