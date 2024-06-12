"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function TechStackBox() {
  return (
    <div className="flex h-full  w-full  items-center justify-evenly text-white">
      <motion.div whileHover={{ scale: 1.2 }}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          width={60}
          height={60}
          className="cursor-pointer"
          alt="Next JS Icon"
        />
      </motion.div>
      <motion.div whileHover={{ y: -10 }}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          width={60}
          height={60}
          className="cursor-pointer"
          alt="Typescript Icon"
        />
      </motion.div>
      <motion.div whileHover={{ rotate: "-45deg" }}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          width={60}
          height={60}
          className="cursor-pointer"
          alt="Tailwind Icon"
        />
      </motion.div>
      <motion.div whileHover={{ y: 10 }}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
          width={60}
          height={60}
          className="cursor-pointer"
          alt="Framer Motion Icon"
        />
      </motion.div>
      <motion.div whileHover={{ rotate: 90 }}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          width={60}
          height={60}
          className="cursor-pointer"
          alt="React Icon"
        />
      </motion.div>
    </div>
  );
}

export default TechStackBox;
