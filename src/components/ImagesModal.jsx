import { createPortal } from "react-dom";
import ImagesJSX from "./ImagesJSX";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ImagesModal({ setModalDisplayed }) {
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && setModalDisplayed(false);
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setModalDisplayed]);

  return createPortal(
    <motion.dialog
      transition={{ duration: 0.22 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="z-10 grid grid-cols-4 bg-transparent max-second:hidden"
      open
    >
      <button
        onClick={() => setModalDisplayed(false)}
        className="col-span-4 mb-6 h-6 w-6 justify-self-end"
      >
        <img
          src="/public/images/icon-close.svg"
          alt="click to close images display."
          className="w-full"
        />
      </button>
      <ImagesJSX modal />
    </motion.dialog>,
    document.getElementById("modal"),
  );
}
