import CartTable from "./CartTable";

function CartDisplay() {
  return (
    <div className="align-center mt-10 w-5/6 flex-col lg:w-3/5 ">
      <h2 className="text-4xl font-extrabold">Your Cart</h2>
      <CartTable />
    </div>
  );
}

export default CartDisplay;
