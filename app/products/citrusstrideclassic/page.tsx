import ShoePics from "@/components/ui/shoePage/ShoePics";
import ShoeText from "@/components/ui/shoePage/ShoeText";
import { products } from "@/utils/productData";

function page() {
  const citrusStrideClassicID = products[3].productId;

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-10 sm:flex-row lg:gap-40">
      <ShoePics
        thumbnailURLs={[
          "/images/product-3-images/product-3-image-1.webp",
          "/images/product-3-images/product-3-image-2.webp",
          "/images/product-3-images/product-3-image-3.webp",
        ]}
        textID={citrusStrideClassicID - 1}
        imgType="webp"
      />
      <ShoeText textID={citrusStrideClassicID - 1} />
    </div>
  );
}

export default page;
