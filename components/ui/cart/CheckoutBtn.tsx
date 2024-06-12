import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface CheckoutBtnProps {
  onClick: () => void;
}

const CheckoutBtn: React.FC<CheckoutBtnProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-full w-full animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#FF8500,45%,#ffa94d,55%,#FF8500)] bg-[length:200%_100%] text-base 
        font-medium text-white transition-colors focus:outline-none md:w-1/2 
        lg:w-1/5 lg:p-3"
    >
      <motion.div className="mr-1" whileHover={{ x: 5 }} whileTap={{ x: 0 }}>
        <ArrowLongRightIcon
          fill="white"
          className="h-6 w-6 md:h-8 md:w-8 lg:h-20 lg:w-20"
        />
      </motion.div>
    </motion.button>
  );
};

export default CheckoutBtn;
