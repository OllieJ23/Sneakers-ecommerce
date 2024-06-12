"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

function BrowseBtn({ text }: { text?: string }) {
  return (
    <div className="ml-4 mt-8 flex items-center justify-center">
      <motion.button
        aria-label="Browse Button"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 1 }}
        className="group relative mb-2 me-2 inline-flex items-center 
          justify-center overflow-hidden rounded-full text-xl  focus:outline-none"
      >
        <span className="relative rounded-full transition-all duration-75 ease-in group-hover:bg-opacity-0">
          {text}
          <ArrowRightIcon className="h-28 w-28 fill-darkBlue " />{" "}
        </span>
      </motion.button>
    </div>
  );
}

export default BrowseBtn;
