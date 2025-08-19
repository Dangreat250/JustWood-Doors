import React, { useState } from "react";
import FullscreenViewer from "./FullscreenViewer";

const ProductGrid = ({ category, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!category) {
    return (
      <div className="text-center py-20 text-lg text-gray-500">
        Please select a category from the menu.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">{category}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-105 transition-transform"
          >
            <img src={img} alt={`${category} ${i}`} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <FullscreenViewer
          images={images}
          index={selectedIndex}
          setIndex={setSelectedIndex}
        />
      )}
    </div>
  );
};

export default ProductGrid;
