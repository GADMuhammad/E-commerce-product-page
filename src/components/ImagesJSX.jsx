import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    image: "images/image-product-1.jpg",
    thumbnail: "images/image-product-1-thumbnail.jpg",
  },
  {
    image: "images/image-product-2.jpg",
    thumbnail: "images/image-product-2-thumbnail.jpg",
  },
  {
    image: "images/image-product-3.jpg",
    thumbnail: "images/image-product-3-thumbnail.jpg",
  },
  {
    image: "images/image-product-4.jpg",
    thumbnail: "images/image-product-4-thumbnail.jpg",
  },
];

export default function ImagesJSX({ modal = false, setModalDisplayed }) {
  const [displayedImage, setDisplayedImage] = useState(
    JSON.parse(localStorage.getItem("ImageDisplayed")) || 0,
  );
  const changeImage = (index) => {
    setDisplayedImage(index);
    localStorage.setItem("ImageDisplayed", JSON.stringify(index));
  };

  return (
    <>
      <figure
        className={`${modal ? "w-[40rem]" : "w-[27rem] rounded-2xl"} relative col-span-4 mx-auto mb-6 h-fit overflow-hidden max-second:w-2/3 max-second:rounded-none max-md:w-full`}
      >
        {modal ? (
          <motion.img
            key={images[displayedImage].image}
            transition={{ duration: 0.01, ease: "easeInOut" }}
            variants={{
              hidden: { y: "-100%" },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`${modal ? "" : "cursor-pointer rounded-2xl hover:scale-110"} overflow-hidden transition-transform duration-1000 max-second:rounded-none`}
            src={images[displayedImage].image}
            alt="product image"
          />
        ) : (
          <img
            className={`${modal ? "" : "cursor-pointer hover:scale-110"} overflow-hidden rounded-2xl transition-transform duration-1000 max-second:rounded-none`}
            onClick={() => setModalDisplayed(true)}
            src={images[displayedImage].image}
            alt="product image"
          />
        )}

        <button
          onClick={() =>
            displayedImage !== images.length - 1
              ? setDisplayedImage((prev) => prev + 1)
              : null
          }
          className={`absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-4 max-second:block`}
        >
          <img src="images/icon-next.svg" alt="click to display next image" />
        </button>

        <button
          onClick={() =>
            displayedImage !== 0 ? setDisplayedImage((prev) => prev - 1) : null
          }
          className={`absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-4 max-second:block`}
        >
          <img
            src="images/icon-previous.svg"
            alt="click to display previous image"
          />
        </button>
      </figure>

      {images.map(({ thumbnail }, index) => (
        <button
          className={`${index === displayedImage ? "border-orange" : "border-transparent"} mx-auto h-fit w-20 ${modal ? "" : "rounded-xl"} border-2 border-solid max-second:hidden`}
          key={thumbnail}
          onClick={() => changeImage(index)}
        >
          <img
            className={`w-full ${modal ? "" : "rounded-xl"} ${index === displayedImage ? "opacity-35 transition-opacity duration-500" : ""}`}
            src={thumbnail}
            alt="thumbnail"
          />
        </button>
      ))}
    </>
  );
}
