import { motion } from "framer-motion";

export default function ProductDetails({
  amountOfProductInCart,
  changeAmount,
}) {
  return (
    <section className="w-[30rem] py-8 font-semibold max-second:w-full max-second:px-6">
      <h6 className="mb-4 tracking-widest text-darkGrayishBlue">
        SNEAKER COMPANY
      </h6>
      <h1 className="max-third:text-4xl mb-8 text-5xl">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mb-8 font-light text-darkGrayishBlue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="mb-3 grid grid-cols-3 items-center gap-x-0 gap-y-2">
        <span className="w-fit text-3xl">$125.00</span>
        <span className="col-span-2 w-fit rounded-lg bg-black px-4 py-1 text-white max-second:col-span-1">
          50%
        </span>
        <s className="col-span-3 mb-4 block text-darkGrayishBlue max-second:col-span-1 max-second:mb-0 max-second:text-right">
          $250.00
        </s>
      </div>

      <div className="flex items-center gap-6 max-md:flex-col">
        <div className="flex h-12 w-40 items-center justify-between rounded-lg bg-lightGrayishBlue px-4 max-second:w-full">
          <button
            className="h-full"
            onClick={() => amountOfProductInCart !== 0 && changeAmount(-1)}
          >
            <img
              src="images/icon-minus.svg"
              alt="click to reduce the amount of the product in cart"
            />
          </button>
          <motion.span
            key={amountOfProductInCart}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.3 }}
          >
            {amountOfProductInCart}
          </motion.span>
          <button className="h-full" onClick={() => changeAmount(1)}>
            <img
              src="images/icon-plus.svg"
              alt="click to reduce the amount of the product in cart"
            />
          </button>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 700 }}
          className="flex justify-center gap-4 rounded-lg bg-orange px-14 py-3 tracking-wide max-second:w-full"
          onClick={() => changeAmount(1)}
        >
          <img src="images/icon-cart.svg" alt="cart image" /> Add to cart
        </motion.button>
      </div>
    </section>
  );
}
