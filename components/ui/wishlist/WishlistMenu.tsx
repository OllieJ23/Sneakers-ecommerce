import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  showDropdown: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const WishListMenu: React.FC<ModalProps> = ({
  showDropdown,
  handleClose,
  children,
}) => {
  return (
    <AnimatePresence>
      {showDropdown && (
        <motion.div
          className="no-select fixed  z-50 w-full rounded-md bg-lightBlue p-2 shadow-md  lg:absolute lg:right-[10.5rem] lg:top-16 lg:w-64 lg:bg-lightBlue"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="right absolute right-2 top-0 flex justify-end lg:justify-center">
            <button onClick={handleClose} className="text-2xl font-bold">
              ×
            </button>
          </div>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WishListMenu;
