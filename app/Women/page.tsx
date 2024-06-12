import ProductCard from "@/components/ui/generic/ProductCard";
import { products } from "@/utils/productData";
import Image from "next/image";
import logoImg from "@/public/images/logo.svg";

function Page() {
  const shoeProducts = products.filter((product) => product.category !== "men");

  return (
    <>
      <h1 className="mt-4 flex items-center justify-center text-5xl font-bold uppercase tracking-wide text-grayBlue opacity-75">
        Women&apos;s
      </h1>
      <div className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row ">
        {shoeProducts.map((product) => (
          <ProductCard
            key={product.productId}
            name={product.productName}
            hrefPath={product.hrefPath}
            price={product.productPrice}
            imageURL={product.productImage}
            hasDiscount={product.hasDiscount}
            discountPercent={product.discountPercent}
          />
        ))}
      </div>
    </>
  );
}

export default Page;
