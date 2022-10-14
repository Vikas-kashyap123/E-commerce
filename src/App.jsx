import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import Details from "./Details";
import NotFound from "./NotFound";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import AlertCard from "./AlertCard";
import { cartContext, updateContext } from "./Contexts";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  const [myName, setMyName] = useState("");

  function handleCartChange(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }
  function updateCart(newCart) {
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
        <AlertProvider>
          <AlertCard />
          <updateContext.Provider value={updateCart}>
            <cartContext.Provider value={savedData}>
              <UserProvider>
                <Routes>
                  <Route
                    index
                    element={
                      <UserRoute>
                        <ProductPage />
                      </UserRoute>
                    }
                  />
                  <Route
                    path="/Products/:id"
                    element={
                      <UserRoute>
                        <Details onAddToCart={handleCartChange} />
                      </UserRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />

                  <Route
                    path="/cart"
                    element={
                      <UserRoute>
                        <CartPage />
                      </UserRoute>
                    }
                  />

                  <Route
                    path="/login"
                    element={
                      <AuthRoute>
                        <LoginPage />
                      </AuthRoute>
                    }
                  />
                  <Route
                    path="/signup"
                    element={
                      <AuthRoute>
                        <SignUp />
                      </AuthRoute>
                    }
                  />
                  <Route
                    path="/forgot"
                    element={
                      <AuthRoute>
                        <ForgotPassword />
                      </AuthRoute>
                    }
                  />
                  {/* <Route
                    path="/"
                    element={
                      <UserRoute>
                        <ProductPage setUser={setUser} />
                      </UserRoute>
                    }
                  /> */}
                </Routes>
              </UserProvider>
            </cartContext.Provider>
          </updateContext.Provider>
        </AlertProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
