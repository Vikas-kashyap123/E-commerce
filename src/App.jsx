import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import Details from "./Details";
import NotFound from "./NotFound";
import { useState } from "react";
import CartPage from "./CartPage";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  console.log("savedData", savedData);

  const [cart, setCart] = useState(savedData);

  function handleCartChange(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className="flex flex-col h-screen p-2 overflow-scroll bg-gray-default">
      <Navbar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductPage />} />
          <Route
            path="/Products/:id"
            element={<Details onAddToCart={handleCartChange} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<CartPage cartId={savedData} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
