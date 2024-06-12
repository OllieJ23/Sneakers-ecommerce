"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ArrowBtn from "./ArrowBtn";
import Link from "next/link";

function ProductCard({
  name,
  imageURL,
  price,
  hasDiscount,
  discountPercent,
  hrefPath,
}: {
  name: string;
  imageURL: string;
  price: number;
  hasDiscount?: boolean;
  discountPercent?: number;
  hrefPath: string;
}) {
  return (
    <Link href={hrefPath}>
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ y: -10 }}
        className="w-80 cursor-pointer overflow-hidden rounded-lg bg-white shadow-md"
      >
        <div className="relative" style={{ width: "100%", height: "24rem" }}>
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={imageURL}
            sizes="100%"
            alt="Product Image"
            className="absolute"
            priority
          />
          {hasDiscount && (
            <span className=" relative rounded-r-lg bg-black p-2 text-lg font-bold tracking-wider text-green shadow-lg">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        <div className="p-4">
          <h2 className="mb-4 text-lg font-semibold">{name}</h2>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold uppercase tracking-wide text-darkBlue">
              £{price.toFixed(2)}
            </h3>
            <ArrowBtn />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProductCard;
