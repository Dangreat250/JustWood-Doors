import React from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FullscreenViewer = ({ images, index, setIndex }) => {
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button
        onClick={() => setIndex(null)}
        className="absolute top-4 right-4 text-white text-3xl"
      >
        <FaTimes />
      </button>

      <button
        onClick={prev}
        className="absolute left-4 text-white text-4xl"
      >
        <FaArrowLeft />
      </button>

      <img src={images[index]} alt="viewer" className="max-h-[80%] max-w-[80%] rounded-lg" />

      <button
        onClick={next}
        className="absolute right-4 text-white text-4xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default FullscreenViewer;
