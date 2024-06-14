"use client";
import React, { useEffect } from "react";
import axios from "axios";
import useCartStore from "@/stores/cart-store";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import toast from "react-hot-toast";
import { XCircleIcon } from "@heroicons/react/16/solid";
import CheckoutBtn from "./CheckoutBtn";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  size: number;
}
function CartTable() {
  const {
    cart,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    initializeCart,
  } = useCartStore();

  async function checkout(data: CartItem[], email: string) {
    const items = data.map((d: CartItem) => ({
      name: d.name,
      quantity: d.quantity,
      price: d.price,
      image: `https://testimages.com${d.image}`,
    }));

    try {
      const res = await axios.post("/api/checkout", {
        email,
        items,
        success_url: `${window.location.origin}/Success`, // Dynamic URL for success page
        currency: "gbp",
      });

      window.location.assign(res.data.url);
      clearCart();
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  useEffect(() => {
    initializeCart();
  }, [initializeCart]);

  function handleRemoveFromCart(itemId: number, size: number) {
    removeFromCart(itemId, size);
    toast("Removed from Cart.", {
      duration: 3000,
      position: "bottom-center",
      style: {
        background: "hsl(223, 64%, 98%)",
        color: "hsl(220, 13%, 13%)",
        fontWeight: 500,
      },
      icon: <XCircleIcon className="w-8 fill-red" />,
    });
  }

  function handleIncreaseQuantity(itemId: number, size: number) {
    increaseQuantity(itemId, size);
  }

  function handleDecreaseQuantity(itemId: number, size: number) {
    decreaseQuantity(itemId, size);
  }

  function formatPrice(price: number, quantity: number) {
    return price * quantity;
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      {cart.length === 0 ? (
        <div className="flex h-[20rem] items-center justify-center text-grayBlue">
          <span className="text-2xl font-semibold">Your Cart is Empty.</span>
        </div>
      ) : (
        <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
          <div className="max-h-[50vh] overflow-y-auto">
            <table className="w-full min-w-[600px] table-fixed sm:min-w-full">
              <thead className="text-boldest bg-paleOrange text-xs uppercase text-grayBlue">
                <tr>
                  <th scope="col" className="w-1/6 px-6 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="w-1/6 px-6 py-3 text-left">
                    Product
                  </th>
                  <th scope="col" className="w-1/6 px-6 py-3 text-center">
                    Qty
                  </th>
                  <th scope="col" className="w-1/6 px-2 py-3 text-center">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item: CartItem) => (
                  <tr
                    key={`${item.id}-${item.size}`} // Use unique key based on ID and size
                    className="border-b bg-lightBlue hover:bg-gray-50"
                  >
                    <td className="p-2">
                      <Link
                        href={`/products/${item.name
                          .replace(/\s+/g, "")
                          .toLocaleLowerCase()}`}
                      >
                        <Image
                          style={{ width: "auto" }}
                          width={88}
                          height={88}
                          src={item.image}
                          className="rounded-md"
                          alt={item.name}
                        />
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-darkBlue lg:text-lg">
                      {item.name}{" "}
                      <span className="text-xs text-grayBlue">
                        (Size-{item.size})
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-[1rem] lg:justify-evenly">
                        <Image
                          style={{ width: "auto" }}
                          className="cursor-pointer transition-all hover:opacity-80"
                          src="/images/icon-minus.svg"
                          alt="Decrease Quantity Icon"
                          width={14}
                          height={14}
                          onClick={() =>
                            handleDecreaseQuantity(item.id, item.size)
                          }
                        />
                        <span className="text-sm font-bold text-darkBlue lg:text-lg">
                          {item.quantity}
                        </span>
                        <Image
                          src="/images/icon-plus.svg"
                          alt="Increase Quantity Icon"
                          width={14}
                          height={14}
                          className="cursor-pointer transition-all hover:opacity-80"
                          onClick={() =>
                            handleIncreaseQuantity(item.id, item.size)
                          }
                        />
                        <TrashIcon
                          className="h-6 w-6 cursor-pointer text-orange hover:opacity-85 active:scale-95"
                          onClick={() =>
                            handleRemoveFromCart(item.id, item.size)
                          }
                        />
                      </div>
                    </td>
                    <td className="px-2 py-4 text-center text-sm font-semibold lg:text-lg">
                      £{formatPrice(item.price, item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className="border-t bg-darkBlue">
                  <td
                    colSpan={2}
                    className="px-2 py-2 text-right text-xl font-semibold text-white"
                  >
                    Total:
                  </td>
                  <td
                    colSpan={2}
                    className="px-2 py-2 text-xl font-semibold text-orange"
                  >
                    £{totalPrice.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-12 flex items-center justify-center">
          <CheckoutBtn onClick={() => checkout(cart, "this@test.email")} />
        </div>
      )}
    </>
  );
}

export default CartTable;
