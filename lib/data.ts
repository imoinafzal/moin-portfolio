import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import extramilesImg from "@/public/Extramiles.png";
import imanzyImg from "@/public/Imanzy.png";
import inspirationImg from "@/public/Inspiration.png";

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
    title: "MERN-Stack bootcamp",
    location: "Lahore, Township",
    description:
      "I graduated after 3 months of studying. I immediately found a job as a MERN-Stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Lahore, DHA",
    description:
      "I was initially being hired as a MERN-stack developer specialising in frontend, but soon upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Web 3.0 and Metaverse",
    location: "Lahore, UMT",
    description: "",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Extramiles",
    description:
      "I worked as a frontend developer on this project during my stay at techanzy. My main responsibilities involved APIs integration and managing React components for better user experience.",
    tags: ["React", "Next.js", "Nest.js", "Tailwind", "MongoDB"],
    imageUrl: extramilesImg,
  },
  {
    title: "Imanzy",
    description:
      "I led this AI-based project which focused on image-generation through user prompts. AI image generation is its main feature alongwith photo editing.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Foocus API", "AI"],
    imageUrl: imanzyImg,
  },
  {
    title: "Inspiration Animation",
    description:
      "Single=hhaandedly developed this AI-driven web application. It was more like a story e-book for the children and involved the same image-generation feature.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Foocus API", "AI"],
    imageUrl: inspirationImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "ShadcnUI",
  "Supabase",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
