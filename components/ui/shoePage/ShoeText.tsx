"use client";
import React, { useState, useEffect } from "react";
import { products } from "@/utils/productData";
import AddtoCartBtn from "../generic/AddtoCartBtn";
import QuantityBtn from "../generic/QuantityBtn";
import useQuantityStore from "@/stores/quantity-store";
import { FaceFrownIcon, HeartIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import clsx from "clsx";
import toast from "react-hot-toast";

function ShoeText({ textID }: { textID: number }) {
  const {
    productId,
    productName,
    productPrice,
    productImage,
    productDescription,
    discountPercent,
    isFavourited,
    availableSizes,
  } = products[textID];

  const { setQuantity } = useQuantityStore();

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [favouriteItem, setFavouriteItem] = useState(isFavourited);
  const [selectedSize, setSelectedSize] = useState<number>(availableSizes[0]);

  useEffect(() => {
    setSelectedQuantity(1);
    setQuantity(1);
    setSelectedSize(availableSizes[0]);
  }, [textID, setQuantity, availableSizes]);

  useEffect(() => {
    setFavouriteItem(isFavourited);
  }, [isFavourited]);

  function handleToggleFavourite() {
    setFavouriteItem((item) => !item);
    products[textID].isFavourited = !isFavourited;

    !isFavourited
      ? toast("Added to Favourites!", {
          duration: 3000,
          position: "bottom-center",
          style: { background: "#ed1a3d", color: "white" },
          icon: <HeartIcon className="w-8" />,
        })
      : toast("Removed from Favourites.", {
          duration: 3000,
          position: "bottom-center",
          style: { background: "#ed1a3d", color: "white" },
          icon: <FaceFrownIcon className="w-6" />,
        });
  }

  return (
    <div className="flex flex-col px-4 py-4 lg:w-2/6 lg:items-start lg:px-0 lg:py-0">
      <h3 className="mb-2 text-center font-bold uppercase tracking-wider text-orange lg:mb-6 lg:text-left">
        Sneaker Company
      </h3>
      <h1 className="mb-4 text-center text-3xl font-bold text-darkBlue lg:mb-8 lg:text-left lg:text-5xl">
        {productName}
      </h1>
      <p className="mb-4 w-full text-center text-base leading-relaxed tracking-wide text-grayBlue lg:mb-8 lg:w-5/6 lg:text-left lg:text-lg">
        {productDescription}
      </p>
      <div className="mb-4 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start lg:gap-4">
        <h2 className="text-2xl font-bold tracking-wider text-darkBlue lg:text-3xl">
          £{productPrice.toFixed(2)}
        </h2>
        {discountPercent && (
          <span className="w-12 rounded-md bg-paleOrange px-2 py-1 text-center font-bold tracking-wider text-orange lg:w-16 lg:px-4">
            {discountPercent}%
          </span>
        )}
      </div>
      {discountPercent && (
        <h4 className="mb-4 text-center text-base font-bold tracking-wide text-grayBlue line-through opacity-40 lg:mb-8 lg:text-left lg:text-lg">
          £250.00
        </h4>
      )}
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <label htmlFor="sizes" className="text-lg font-bold text-darkBlue">
            Size
          </label>
          <select
            id="sizes"
            value={selectedSize}
            onChange={(e) => setSelectedSize(Number(e.target.value))}
            className="w-24 rounded-md bg-paleOrange p-2 font-bold text-darkBlue outline-none transition lg:w-20"
          >
            {availableSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <QuantityBtn setQuantity={setSelectedQuantity} />
          <AddtoCartBtn
            productId={productId}
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            quantity={selectedQuantity}
            size={selectedSize}
          />
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <HeartIcon
              className={clsx(
                "h-10 cursor-pointer fill-none stroke-[#ff0055d1] stroke-[0.8px]",
                favouriteItem && "!fill-[#ff0055d1]",
              )}
              onClick={handleToggleFavourite}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ShoeText;
