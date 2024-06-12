import ShoePics from "@/components/ui/shoePage/ShoePics";
import ShoeText from "@/components/ui/shoePage/ShoeText";
import { products } from "@/utils/productData";

function page() {
  const emberStrideClassicID = products[1].productId;

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-10 sm:flex-row lg:gap-40">
      <ShoePics
        thumbnailURLs={[
          "/images/product-4-images/product-4-image-1.webp",
          "/images/product-4-images/product-4-image-2.webp",
          "/images/product-4-images/product-4-image-3.webp",
        ]}
        textID={emberStrideClassicID + 2}
        imgType="webp"
        type="emberClassic"
      />
      <ShoeText textID={emberStrideClassicID - 1} />
    </div>
  );
}

export default page;
