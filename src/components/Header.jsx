import { useState, useRef, useEffect } from "react";
import Cart from "./Cart";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

const buttons = [
  {
    title: "Collections",
  },
  {
    title: "Men",
  },
  {
    title: "Woman",
  },
  {
    title: "About",
  },
  {
    title: "Contact",
  },
  {
    title: "Another Store",
    style: "mr-auto max-second:mr-0",
  },
  {
    path: "images/icon-cart.svg",
    style: "relative",
  },
  {
    path: "images/image-avatar.jpg",
    style: "w-10 h-10",
  },
];

const indicatorStyle =
  "absolute right-0 top-20 z-10 hidden w-full -translate-y-2 rounded-lg border-2 border-solid border-orange group-hover:block";

export default function Header({ changeAmount }) {
  const [cartDisplayed, setCartDisplayed] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartDisplayed(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const notify = (message, place) => {
    toast.warn(message, {
      position: place,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const cart = (e) => {
    e.stopPropagation(); // Prevent click from closing immediately
    setCartDisplayed((prev) => !prev);
  };

  return (
    <header className="border-b-solid relative border-b border-b-grayishBlue pb-10 max-second:px-8">
      <AnimatePresence>
        {burgerMenu && (
          <motion.nav
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ type: "tween" }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute -top-10 left-0 z-10 hidden h-screen w-fit flex-col items-start gap-6 bg-white py-10 pl-7 pr-28 max-second:flex"
          >
            <button onClick={() => setBurgerMenu(false)}>
              <img
                src="images/icon-close.svg"
                alt="Click to close burger menu"
                className="h-full w-full"
              />
            </button>
            {buttons
              .filter((btn) => btn.title)
              .map(({ title }) =>
                title?.includes("Store") ? (
                  <a
                    key={title}
                    href="https://demo-store-tan-one.vercel.app/"
                    target="_blank"
                    className="text-xl font-semibold"
                  >
                    {title}
                  </a>
                ) : (
                  <button
                    key={title}
                    onClick={() =>
                      notify(
                        `${title} page was not included in the design provided !`,
                        "top-right",
                      )
                    }
                    className="text-xl font-semibold"
                  >
                    {title}
                  </button>
                ),
              )}
          </motion.nav>
        )}
      </AnimatePresence>

      <ul className="flex flex-wrap items-center gap-10">
        <button onClick={() => setBurgerMenu(true)}>
          <img className="hidden max-second:block" src="images/icon-menu.svg" />
        </button>

        <li className="mr-2 max-second:mr-auto">
          <img src="images/logo.svg" />
        </li>

        {buttons.map(({ title, path, style }) =>
          path ? (
            <li
              key={path}
              className={`${path === "images/image-avatar.jpg" ? "max-third:hidden" : ""} ${style}`}
              ref={path === "images/icon-cart.svg" ? cartRef : null}
            >
              <button
                className="h-full w-full"
                onClick={path === "images/icon-cart.svg" ? cart : null}
              >
                <img
                  src={path}
                  className={
                    path === "images/image-avatar.jpg" ? "rounded-full" : ""
                  }
                />
              </button>
              <AnimatePresence>
                {path === "images/icon-cart.svg" && cartDisplayed && (
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -50,
                        transition: { duration: 0.5 },
                      },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 150 }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="max-third:-right-3 absolute -right-24 top-12 z-10 h-fit w-96 rounded-lg bg-white px-4 py-4 shadow-cart max-sm:mx-auto max-sm:w-[90vw]"
                    ref={cartRef}
                  >
                    <Cart changeAmount={changeAmount} />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ) : title.includes("Store") ? (
            <li
              key={title}
              className={`group relative max-second:hidden ${style}`}
            >
              <a
                href="https://demo-store-tan-one.vercel.app/"
                target="_blank"
                className="h-full w-full tracking-wider text-darkGrayishBlue transition-colors duration-1000 hover:text-veryDarkBlue"
              >
                {title}
              </a>
              <div className={indicatorStyle} />
            </li>
          ) : (
            <li
              key={title}
              className={`group relative max-second:hidden ${style}`}
            >
              <button
                onClick={() =>
                  notify(
                    `${title} page was not included in the design provided !`,
                    "top-left",
                  )
                }
                className="h-full w-full tracking-wider text-darkGrayishBlue transition-colors duration-1000 hover:text-veryDarkBlue"
              >
                {title}
              </button>
              <div className={indicatorStyle} />
            </li>
          ),
        )}
      </ul>
      <ToastContainer />
    </header>
  );
}
