import ShoePics from "@/components/ui/shoePage/ShoePics";
import ShoeText from "@/components/ui/shoePage/ShoeText";
import { products } from "@/utils/productData";

function page() {
  const fallShoeData = products[0];

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-10 sm:flex-row lg:gap-40">
      <ShoePics
        thumbnailURLs={[
          "/images/image-product-1-thumbnail.jpg",
          "/images/image-product-2-thumbnail.jpg",
          "/images/image-product-3-thumbnail.jpg",
          "/images/image-product-4-thumbnail.jpg",
        ]}
        textID={fallShoeData.productId}
        imgType="jpg"
      />
      <ShoeText textID={fallShoeData.productId - 1} />
    </div>
  );
}

export default page;
