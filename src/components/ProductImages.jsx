import { useState } from "react";
import ImagesModal from "./ImagesModal";
import ImagesJSX from "./ImagesJSX";
import { AnimatePresence } from "framer-motion";

export default function ProductImages() {
  const [modalDisplayed, setModalDisplayed] = useState(false);

  return (
    <>
      <AnimatePresence>
        {modalDisplayed && window.innerWidth >= 1100 && (
          <ImagesModal setModalDisplayed={setModalDisplayed} />
        )}
      </AnimatePresence>
      <section className="grid grid-cols-4 max-second:mx-auto">
        <ImagesJSX setModalDisplayed={setModalDisplayed} />
      </section>
    </>
  );
}
