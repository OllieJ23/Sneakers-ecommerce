import { useEffect } from "react";
import Image from "next/image";
import useQuantityStore from "@/stores/quantity-store";

function QuantityBtn({
  setQuantity,
}: {
  setQuantity: (value: number) => void;
}) {
  const {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    setQuantity: setStoreQuantity,
  } = useQuantityStore();

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity, setQuantity]);

  const handleDecrease = () => {
    decreaseQuantity();
  };

  const handleIncrease = () => {
    increaseQuantity();
  };

  useEffect(() => {
    setStoreQuantity(1);
  }, [setStoreQuantity]);

  return (
    <div className="flex w-28 items-center justify-between rounded-xl bg-lightBlue px-2 py-4 shadow-sm lg:w-40 lg:px-6">
      <Image
        style={{ width: "auto" }}
        className="cursor-pointer transition-all hover:opacity-80"
        src="/images/icon-minus.svg"
        alt="Decrease Quantity Icon"
        width={14}
        height={14}
        onClick={handleDecrease}
      />
      <span className="font-bold">{quantity || 1}</span>
      <Image
        src="/images/icon-plus.svg"
        alt="Increase Quantity Icon"
        width={14}
        height={14}
        className="cursor-pointer transition-all hover:opacity-80"
        onClick={handleIncrease}
      />
    </div>
  );
}

export default QuantityBtn;
