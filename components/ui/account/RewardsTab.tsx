import { useState } from "react";
import { BanknotesIcon, CheckIcon, GiftIcon } from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion";

const RewardsTab: React.FC = () => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <div className="ml-6 mt-0  w-full py-6 lg:mt-12">
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-center gap-4 lg:flex lg:flex-row lg:space-y-0">
        <div
          className="relative w-1/2 lg:w-1/4"
          onMouseEnter={() => setTooltip("Redeemed: 10% OFF")}
          onMouseLeave={() => setTooltip(null)}
        >
          <div className="mb-2">
            <div className="mx-auto flex h-16 w-16 items-center rounded-full  bg-gradient-to-br from-emerald-300 to-emerald-500 text-lg text-white lg:h-10 lg:w-10">
              <span className="relative flex w-full items-center justify-center text-center text-white">
                <CheckIcon className="w-full fill-white p-1" />
              </span>
            </div>
          </div>
          <div className="flex-col items-center justify-center">
            <div className="md:sm text-center text-xs line-through">
              10% OFF
            </div>
            <p className=" text-center text-xs italic md:text-base ">
              Redeemed!
            </p>
          </div>
          <AnimatePresence>
            {tooltip === "Redeemed: 10% OFF" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-[.5rem]
top-0 -mt-8 transform rounded bg-gradient-to-br from-emerald-500 to-emerald-800 p-2 text-center text-xs text-white shadow-md lg:left-[5rem] lg:-mt-12"
              >
                100 Points
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="relative w-1/2 lg:w-1/4 "
          onMouseEnter={() => setTooltip("Redeemed: 20% OFF")}
          onMouseLeave={() => setTooltip(null)}
        >
          <div className="relative mb-2">
            <div
              className="align-center absolute hidden content-center items-center align-middle lg:block "
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="align-center w-full flex-1 items-center rounded align-middle">
                <div
                  className="w-0 rounded bg-emerald-400 py-1"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            <div className="mx-auto flex h-16 w-16 items-center rounded-full  bg-gradient-to-br from-emerald-300 to-emerald-500 text-lg text-white lg:h-10 lg:w-10">
              <span className="flex w-full items-center justify-center text-center text-white">
                <CheckIcon className="w-full fill-white p-1" />
              </span>
            </div>
          </div>
          <div className=" flex-col items-center justify-center">
            <div className="md:sm  w-full  text-center text-xs line-through">
              20% OFF
            </div>
            <p className="text-center text-xs italic md:text-base lg:block">
              Redeemed!
            </p>
          </div>
          <AnimatePresence>
            {tooltip === "Redeemed: 20% OFF" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-[.5rem]
top-0 -mt-8 transform rounded bg-gradient-to-br from-emerald-500 to-emerald-800 p-2 text-center text-xs text-white shadow-md lg:left-[5rem] lg:-mt-12"
              >
                200 Points
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="relative w-1/2 lg:w-1/4 "
          onMouseEnter={() => setTooltip("50% OFF")}
          onMouseLeave={() => setTooltip(null)}
        >
          <div className="relative mb-2">
            <div
              className="align-center absolute hidden content-center items-center align-middle lg:flex"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
                <div
                  className="w-0 rounded bg-emerald-300 py-1"
                  style={{ width: "33%" }}
                ></div>
              </div>
            </div>

            <div className="mx-auto flex h-16 w-16 items-center rounded-full  bg-gradient-to-br from-neutral-100 to-neutral-300 text-lg text-white lg:h-10 lg:w-10">
              <span className="flex w-full items-center justify-center text-center text-white">
                <BanknotesIcon className="w-8 fill-emerald-500 p-1" />
              </span>
            </div>
          </div>
          <div className="ml-2 text-center text-xs md:text-base lg:ml-0">
            50% OFF
          </div>
          <AnimatePresence>
            {tooltip === "50% OFF" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-[.5rem] top-0 -mt-8 transform rounded bg-gradient-to-br from-lightBlue to-paleOrange p-2 text-center text-xs text-orange shadow-md lg:left-[5rem] lg:-mt-12"
              >
                500 Points
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="relative w-1/2 lg:w-1/4 "
          onMouseEnter={() => setTooltip("FREE Product")}
          onMouseLeave={() => setTooltip(null)}
        >
          <div className="relative mb-2">
            <div
              className="align-center absolute hidden content-center items-center align-middle lg:flex"
              style={{
                width: "calc(100% - 2.5rem - 1rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
                <div
                  className="w-0 rounded bg-emerald-300 py-1"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="mx-auto flex h-16 w-16 items-center rounded-full  bg-gradient-to-br from-neutral-100 to-neutral-300 text-lg text-white lg:h-10 lg:w-10">
              <span className="flex w-full items-center justify-center text-center text-white">
                <GiftIcon className="w-10 fill-orange p-1" />
              </span>
            </div>
          </div>
          <div className="ml-2 text-center text-xs md:text-base lg:ml-0">
            FREE Product!
          </div>
          <AnimatePresence>
            {tooltip === "FREE Product" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-[.5rem] top-0 -mt-8 transform rounded bg-gradient-to-br from-lightBlue to-paleOrange p-2 text-center text-xs text-orange shadow-md lg:left-[5rem] lg:-mt-12"
              >
                1000 Points
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RewardsTab;
