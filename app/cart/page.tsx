import CartDisplay from "@/components/ui/cart/CartDisplay";

import BrowseBtn from "@/components/ui/home/BrowseBtn";
import Link from "next/link";

function page() {
  return (
    <div className="align-center flex justify-center">
      <CartDisplay />
    </div>
  );
}

export default page;
