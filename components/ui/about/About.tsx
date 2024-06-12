"use client";
import React from "react";
import { StickyScroll } from "../aceternity/sticky-scroll-reveal";
import Image from "next/image";
import TechStackBox from "./TechStackBox";
import FramerPic from "@/public/design/desktop-preview.jpg";
import myPic from "@/public/images/Pastel 1.png";
import Programmers from "@/public/images/undraw_pair_programming_re_or4x.svg";

const content = [
  {
    title: "Project Overview",
    description:
      "Originally conceived as a challenge to design a singular product page, this project quickly evolved into a comprehensive showcase of creative prowess and technical skill. Leveraging Next.js, I transformed the concept into a dynamic pseudo e-commerce platform. From seamless navigation to a robust product database and intuitive cart system, every aspect was meticulously crafted to deliver an immersive user experience. Fueled by a passion for creativity and a background in animation, I infused the platform with captivating visuals and interactive elements.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={FramerPic}
          width={500}
          height={500}
          className="h-full w-full object-cover "
          alt="Image of First Project Concept"
          placeholder="blur"
        />
      </div>
    ),
  },
  {
    title: "The Tech' Stack",
    description:
      "The Tech Stack, featuring Next.js, TypeScript, Framer Motion, Tailwind CSS, and Zustand, enables efficient frontend development with rapid iteration, robust type safety, fluid animations, and streamlined styling. Additional dependencies include Heroicons and Simplex Noise for enhanced iconography and procedural generation, empowering us to create immersive web experiences effortlessly.",
    content: <TechStackBox />,
  },
  {
    title: "A Little About Me",
    description:
      "With a foundation in Computer Science and over 4 years of animation experience, I've embarked on a seamless transition into software development. Self-taught and certified in modern front-end frameworks, I bring a unique blend of problem-solving, technical proficiency, and creative flair to collaborative teams. My diverse skill set enriches projects with professionalism, innovation, and a touch of creativity, enhancing team ambitions and driving success.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={myPic}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Picture of Developer (Me!)"
          placeholder="blur"
        />
      </div>
    ),
  },
  {
    title: "Future Considerations",
    description:
      "Looking ahead, as i continue to evolve my skills im eager to build upon this platform and incorporate personalised user accounts with authentication and live order tracking to reflect a realistic experience of e-commerce applications. Following this, I would love to utilise analytical tools to optimise performance and gather insight into user behaviour, product performance and platform usage as seen in many industry standard tools as Magento. ",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--amber-900))] text-white">
        <Image
          src={Programmers}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Vector art of two programmers"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-2 lg:p-10">
      <StickyScroll content={content} />
    </div>
  );
}
