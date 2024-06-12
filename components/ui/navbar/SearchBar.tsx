import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
  hrefPath: string;
  hasDiscount?: boolean;
  discountPercent?: number;
  category: "men" | "women" | "both";
  isFavourited: boolean;
  searchTerms: string[];
}

interface SearchBarProps {
  products: Product[];
  onSearch?: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ products, onSearch }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading
    if (onSearch) {
      onSearch(searchTerm);
    }

    const matchedProduct = products.find((product) =>
      product.searchTerms.some((term) =>
        term.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );

    if (matchedProduct) {
      router.push(matchedProduct.hrefPath);
    } else {
      // Optionally handle case where no match is found
      console.log("No matching product found");
    }
    setLoading(false); // End loading
  };

  return (
    <div className="flex w-1/2 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-sm lg:w-full"
        name="search"
        id="search"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          disabled={loading}
          className="w-full rounded-l-md bg-gradient-to-br  from-amber-50 to-amber-100 p-1 text-sm  outline-none placeholder:text-grayBlue "
        />
        <motion.button
          disabled={loading}
          type="submit"
          className="flex items-center justify-center rounded-r-md bg-gradient-to-br from-amber-400 to-orange px-1 py-1 text-white transition duration-200 ease-in-out"
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </motion.button>
      </form>
    </div>
  );
};

export default SearchBar;
