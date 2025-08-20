
   import React, { useState } from "react";
   import { motion, AnimatePresence } from "framer-motion";
   import { FaWhatsapp, FaShoppingCart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
   import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
   import { useCart } from "./CartContext";
   import { products } from "../features/products";


   const ProductGallery = ({ category }) => {
     const [selectedProduct, setSelectedProduct] = useState(null);
     const { cart, addToCart, updateQuantity, removeFromCart, getTotalPrice, generateWhatsAppCartMessage } = useCart();
     const [showCart, setShowCart] = useState(false);

     const whatsappMsg = `Hello! I'm interested in your ${category || "products"}. Please provide more details.`;

     const filteredProducts = category
       ? products[category] || []
       : Object.values(products).flat();

     return (
       <div className="p-6">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {filteredProducts.length > 0 ? (
             filteredProducts.map((product) => (
               <motion.div
                 key={product.id}
                 whileHover={{ scale: 1.05 }}
                 className="bg-gray-900/80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl border border-gray-700"
                 onClick={() => setSelectedProduct(product)}
               >
                 <img
                   src={product.img}
                   alt={product.title}
                   className="w-full h-48 object-cover"
                   onError={(e) => {
                     console.error(`Image failed to load: ${product.img}`);
                     e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found";
                   }}
                 />
                 <div className="p-3 text-center">
                   <p className="font-semibold text-white">{product.title}</p>
                   <p className="text-sm text-gray-400">{product.price}</p>
                   <button
                     onClick={(e) => {
                       e.stopPropagation();
                       addToCart(product);
                     }}
                     className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 mx-auto"
                   >
                     <FaShoppingCart /> Add to Cart
                   </button>
                 </div>
               </motion.div>
             ))
           ) : (
             <p className="text-gray-400 text-center col-span-full">
               No products available for this category.
             </p>
           )}
         </div>

         {/* Product Modal with Zoom */}
         <AnimatePresence>
           {selectedProduct && (
             <motion.div
               className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
             >
               <div className="relative bg-gray-800 rounded-xl p-6 max-w-2xl w-full">
                 <TransformWrapper>
                   <TransformComponent>
                     <img
                       src={selectedProduct.img}
                       alt={selectedProduct.title}
                       className="max-h-[60vh] w-full object-contain rounded-xl"
                       onError={(e) => {
                         console.error(`Modal image failed to load: ${selectedProduct.img}`);
                         e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found";
                       }}
                     />
                   </TransformComponent>
                 </TransformWrapper>
                 <div className="mt-4 text-center">
                   <h3 className="text-xl font-semibold text-yellow-400">{selectedProduct.title}</h3>
                   <p className="text-gray-300">{selectedProduct.desc}</p>
                   <p className="text-lg font-bold text-white mt-2">{selectedProduct.price}</p>
                   <div className="mt-4 flex gap-4 justify-center">
                     <button
                       onClick={() => addToCart(selectedProduct)}
                       className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition text-white font-semibold"
                     >
                       <FaShoppingCart /> Add to Cart
                     </button>
                     <a
                       href={`https://wa.me/+2348066882900?text=${encodeURIComponent(whatsappMsg)}`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition text-white font-semibold"
                     >
                       <FaWhatsapp /> Inquire Now
                     </a>
                   </div>
                 </div>
                 <button
                   onClick={() => setSelectedProduct(null)}
                   className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                 >
                   Close
                 </button>
               </div>
             </motion.div>
           )}
         </AnimatePresence>

         {/* Cart Modal */}
         <AnimatePresence>
           {showCart && (
             <motion.div
               className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setShowCart(false)}
             >
               <motion.div
                 className="relative bg-gray-900 p-6 rounded-xl w-full max-w-2xl max-h-[80vh] overflow-auto"
                 initial={{ scale: 0.8 }}
                 animate={{ scale: 1 }}
                 exit={{ scale: 0.8 }}
                 onClick={(e) => e.stopPropagation()}
               >
                 <h2 className="text-2xl font-bold text-white text-center mb-4">Your Cart</h2>
                 {cart.length === 0 ? (
                   <p className="text-gray-300 text-center">Your cart is empty.</p>
                 ) : (
                   <>
                     {cart.map((item) => (
                       <div key={item.id} className="flex items-center gap-4 mb-4 border-b border-gray-700 pb-4">
                         <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
                         <div className="flex-1">
                           <p className="font-semibold text-white">{item.title}</p>
                           <p className="text-sm text-gray-300">{item.price}</p>
                           <div className="flex items-center gap-2 mt-2">
                             <button
                               onClick={() => updateQuantity(item.id, -1)}
                               className="bg-gray-600 hover:bg-gray-700 text-white p-1 rounded"
                             >
                               <FaMinus size={12} />
                             </button>
                             <span className="text-white">{item.quantity}</span>
                             <button
                               onClick={() => updateQuantity(item.id, 1)}
                               className="bg-gray-600 hover:bg-gray-700 text-white p-1 rounded"
                             >
                               <FaPlus size={12} />
                             </button>
                           </div>
                         </div>
                         <button
                           onClick={() => removeFromCart(item.id)}
                           className="text-red-500 hover:text-red-600"
                         >
                           <FaTrash size={16} />
                         </button>
                       </div>
                     ))}
                     <div className="text-right">
                       <p className="text-lg font-bold text-white">Total: {getTotalPrice()}</p>
                       <a
                         href={`https://wa.me/+2348066882900?text=${encodeURIComponent(generateWhatsAppCartMessage())}`}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
                       >
                         <FaWhatsapp /> Order via WhatsApp
                       </a>
                     </div>
                   </>
                 )}
                 <button
                   onClick={() => setShowCart(false)}
                   className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                 >
                   Close
                 </button>
               </motion.div>
             </motion.div>
           )}
         </AnimatePresence>

         {/* Floating Cart Button */}
         <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
           <button
             onClick={() => setShowCart(true)}
             className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center relative animate-pulse"
           >
             <FaShoppingCart size={28} />
             {cart.length > 0 && (
               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                 {cart.reduce((sum, item) => sum + item.quantity, 0)}
               </span>
             )}
           </button>
           <a
             href={`https://wa.me/+2348066882900?text=${encodeURIComponent(whatsappMsg)}`}
             target="_blank"
             rel="noopener noreferrer"
             className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-pulse"
           >
             <FaWhatsapp size={28} />
           </a>
         </div>
       </div>
     );
   };

   export default ProductGallery;