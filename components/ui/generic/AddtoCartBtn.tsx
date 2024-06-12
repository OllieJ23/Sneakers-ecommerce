import React from "react";
import useCartStore from "@/stores/cart-store";
import toast from "react-hot-toast";
import { PlusCircleIcon } from "@heroicons/react/16/solid";

function AddToCartBtn({
  productId,
  productName,
  productPrice,
  productImage,
  quantity,
  size,
}: {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity: number;
  size: number;
}) {
  const { addToCart } = useCartStore();

  function handleAddToCart() {
    addToCart({
      id: productId,
      name: productName,
      quantity: quantity,
      price: productPrice,
      image: productImage,
      size: size,
    });
    toast("Added to Cart!", {
      duration: 3000,
      position: "bottom-center",

      // Styling
      style: {
        background: "hsl(223, 64%, 98%)",
        color: "hsl(220, 13%, 13%)",
        fontWeight: 500,
      },

      // Custom Icon
      icon: <PlusCircleIcon className="w-8 fill-green" />,
    });
  }

  return (
    <div
      onClick={handleAddToCart}
      className="flex h-10 w-[12rem] cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange text-white shadow-md transition-all hover:scale-105  hover:shadow-xl active:scale-95"
    >
      <svg
        className="scale-75 cursor-pointer fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="20"
      >
        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
      </svg>
      <span className="font-bold">Add to Cart</span>
    </div>
  );
}

export default AddToCartBtn;
