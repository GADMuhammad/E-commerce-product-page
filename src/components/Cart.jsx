export default function Cart({ changeAmount }) {
  const amountOfProductInCart = JSON.parse(
    localStorage.getItem("amountOfProductInCart"),
  );

  return (
    <>
      <h6 className="border-b-solid border-b border-b-grayishBlue pb-4 font-semibold">
        Cart
      </h6>
      {amountOfProductInCart ? (
        <div className="grid grid-cols-5 grid-rows-2 py-6 pr-2">
          <img
            className="w-1h-14 row-span-2 h-14 rounded-lg"
            src="images/image-product-1-thumbnail.jpg"
            alt="Product image"
          />
          <p className="col-span-3 text-sm text-darkGrayishBlue">
            Fall Limited Edition Sneakers
          </p>
          <button
            className="row-span-2 ml-auto self-center"
            onClick={() => changeAmount(0)}
          >
            <img src="images/icon-delete.svg" alt="" />
          </button>
          <p className="col-span-3">
            $125.00 x {amountOfProductInCart}{" "}
            <span className="font-bold tracking-wide">
              = ${(125 * amountOfProductInCart).toFixed(2)}
            </span>
          </p>
          <button className="col-span-5 row-span-2 mt-4 w-full rounded-lg bg-orange py-5 font-bold tracking-wide">
            Checkout
          </button>
        </div>
      ) : (
        <p className="my-16 items-center text-center">Your cart is empty.</p>
      )}
    </>
  );
}
