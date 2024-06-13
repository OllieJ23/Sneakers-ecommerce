"use client";
import Image from "next/image";
import Navlink from "./Navlink";
import Link from "next/link";
import useCartStore, { CartItem } from "@/stores/cart-store";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import WishListMenu from "../wishlist/WishlistMenu";
import { products } from "@/utils/productData";
import SearchBar from "./SearchBar";

const navLinkNames: string[] = [
  "Collections",
  "Men",
  "Women",
  "About",
  "Contact",
];

function Navbar() {
  const wishlistedItems = products.filter((product) => product.isFavourited);
  const { cart, totalCartItems } = useCartStore();
  const [totalItems, setTotalItems] = useState(totalCartItems());
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heartIconRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subscribe to cart changes and update totalItems
    const unsubscribe = useCartStore.subscribe((state) => {
      setTotalItems(state.totalCartItems());
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        heartIconRef.current &&
        !heartIconRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  function handleWishList() {
    setShowModal((showing) => !showing);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  const handleSearch = (searchTerm: string) => {
    // console.log("Searching for:", searchTerm);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed left-0 top-0 z-[999] w-full bg-white shadow-sm ">
      <nav className="mt-2 flex items-center justify-around p-4">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            width="0"
            height="0"
            className="h-auto w-auto"
            alt="Picture of the Logo"
            priority={true}
          />
        </Link>
        <div className="flex items-center justify-evenly gap-4 lg:hidden">
          <SearchBar onSearch={handleSearch} products={products} />
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-grayBlue" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-grayBlue" />
            )}
          </button>
        </div>
        <div className="hidden list-none items-center gap-8 text-grayBlue lg:flex">
          {navLinkNames.map((name) => (
            <Navlink key={name} linkName={name} />
          ))}
          <SearchBar onSearch={handleSearch} products={products} />
          <Link href="/cart" className="relative">
            <svg
              className="relative cursor-pointer fill-grayBlue hover:-rotate-6 hover:fill-orange hover:transition-all"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
            >
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
            </svg>
            {totalItems !== 0 && (
              <span className="absolute top-5 flex h-4 w-4 translate-x-4 transform items-center justify-center rounded-full bg-orange text-xs text-white shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            ref={heartIconRef}
            onClick={handleWishList}
          >
            <HeartIcon className="h-8 cursor-pointer fill-[#ff0055d1]" />
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
            <Link href="/account">
              <UserCircleIcon className="h-8 cursor-pointer fill-grayBlue transition hover:fill-orange hover:opacity-90" />
            </Link>
          </motion.div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center bg-white bg-opacity-75 p-4 shadow-lg backdrop-blur-md lg:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="absolute right-4 top-4 focus:outline-none"
            >
              <XMarkIcon className="h-8 w-8 text-grayBlue" />
            </button>
            <ul className=" mt-8 flex flex-col items-center justify-center gap-4 text-3xl text-grayBlue">
              {navLinkNames.map((name) => (
                <Navlink key={name} linkName={name} />
              ))}

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                onClick={handleWishList}
              >
                <HeartIcon className="mt-6 h-16 cursor-pointer fill-[#ff0055d1] lg:h-8" />
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link href="/account">
                  <UserCircleIcon className="h-16 cursor-pointer fill-grayBlue transition hover:fill-orange hover:opacity-90 lg:h-8" />
                </Link>
              </motion.div>

              <Link href="/cart" className="relative scale-[2]">
                <svg
                  className="relative mt-2  cursor-pointer fill-grayBlue hover:-rotate-6 hover:fill-orange hover:transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                >
                  <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
                </svg>
                {totalItems !== 0 && (
                  <span className="absolute top-4 flex h-4 w-4 translate-x-4 transform items-center justify-center rounded-full bg-orange text-xs text-white shadow-sm lg:top-5">
                    {totalItems}
                  </span>
                )}
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <WishListMenu showDropdown={showModal} handleClose={handleCloseModal}>
        <h2 className=" mb-2 text-center text-lg font-bold text-red">
          Your Favourites
        </h2>
        <ul>
          {wishlistedItems.length > 0 ? (
            wishlistedItems.map((item) => (
              <li
                key={item.productId}
                className="mb-2 transition hover:opacity-85"
              >
                <Link href={item.hrefPath} className="flex items-center gap-4">
                  <Image
                    src={item.productImage}
                    width={70}
                    height={70}
                    alt={item.productName}
                    className="w-auto rounded-md"
                  />
                  <div>
                    <p className="text-md font-bold">{item.productName}</p>
                    <p className="text-sm text-gray-500">
                      £{item.productPrice.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p>No items in wishlist.</p>
          )}
        </ul>
      </WishListMenu>
      <hr
        className="mx-auto my-2 h-px w-3/4 border-t-0 
        bg-transparent bg-gradient-to-r from-transparent via-grayBlue to-transparent opacity-45"
      />
    </div>
  );
}

export default Navbar;
