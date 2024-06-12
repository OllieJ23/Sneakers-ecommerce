import ProductCard from "@/components/ui/generic/ProductCard";
import { products } from "@/utils/productData";

function page() {
  const shoeProducts = products;

  return (
    <>
      <h1 className="mt-4 flex items-center justify-center text-5xl font-bold uppercase tracking-wide text-grayBlue opacity-75">
        Men&apos;s
      </h1>
      <div className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row ">
        {shoeProducts.map(
          (product) =>
            product.category != "women" && (
              <ProductCard
                key={product.productId}
                name={product.productName}
                hrefPath={product.hrefPath}
                price={product.productPrice}
                imageURL={product.productImage}
                hasDiscount={product.hasDiscount}
                discountPercent={product.discountPercent}
              />
            ),
        )}
      </div>
    </>
  );
}

export default page;
