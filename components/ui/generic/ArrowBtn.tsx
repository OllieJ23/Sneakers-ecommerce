import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function ArrowBtn() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-8 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#FF8500,45%,#ffa94d,55%,#FF8500)] 
        bg-[length:200%_100%] px-3 font-medium text-white 
        transition-colors focus:outline-none"
    >
      <motion.div className="mr-1" whileHover={{ x: 5 }} whileTap={{ x: 0 }}>
        <ArrowLongRightIcon fill="white" height={30} />
      </motion.div>
    </motion.button>
  );
}

export default ArrowBtn;
