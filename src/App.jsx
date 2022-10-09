import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Loading from "./Loading";
// import UserRoute from "./UserRoute";
import AlertCard from "./AlertCard.";
import {
  cartContext,
  updateContext,
  loginUserContext,
  Alertcontext,
} from "./Contexts";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);
  const [alert, setAlert] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  console.log("logged in user is", user);

  // console.log("savedData", savedData);
  const [cart, setCart] = useState(savedData);

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

  if (loadingUser) {
    return <Loading />;
  }
  const handleAlertRemove = () => {
    setAlert(undefined);
  };

  return (
    <div className="flex flex-col h-screen p-2 overflow-scroll bg-gray-default">
      <Navbar productCount={totalCount} />
      <div className="grow">
        <Alertcontext.Provider value={{ alert, setAlert, handleAlertRemove }}>
          <AlertCard />
          <updateContext.Provider value={updateCart}>
            <cartContext.Provider value={savedData}>
              <loginUserContext.Provider value={{ user, setUser }}>
                <Routes>
                  <Route index element={<ProductPage user={user} />} />
                  <Route
                    path="/Products/:id"
                    element={<Details onAddToCart={handleCartChange} />}
                  />
                  <Route path="*" element={<NotFound />} />

                  <Route path="/cart" element={<CartPage />} />

                  <Route
                    path="/login"
                    element={<LoginPage setUser={setUser} user={user} />}
                  />
                  <Route
                    path="/signup"
                    element={<SignUp setUser={setUser} user={user} />}
                  />
                  <Route path="/forgot" element={<ForgotPassword />} />
                  <Route path="/" element={<ProductPage setUser={setUser} />} />
                </Routes>
              </loginUserContext.Provider>
            </cartContext.Provider>
          </updateContext.Provider>
        </Alertcontext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
