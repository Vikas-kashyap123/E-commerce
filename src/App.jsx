import React from "react";
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

import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <div className="flex flex-col h-screen p-2 overflow-scroll bg-gray-default">
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <AlertCard />

            <Navbar />
            <div className="grow">
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
                      <Details />
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
              </Routes>
            </div>
            <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
