import React, { useState } from "react";
import CartList from "./CartList";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getProductsIds } from "./Api";
import Loading from "./Loading";
import { useEffect } from "react";
import { withCart } from "./withProvider";

function CartPage({ onItemChange, updateCart, cart, cartData }) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const [localCart, setLocalCart] = useState(cart);

  useEffect(
    function () {
      setLoading(true);
      const cartIds = Object.keys(cart);
      getProductsIds(cartIds).then(function (products) {
        console.log("promises ka data", products);
        setProducts(products);
        setLoading(false);
      });
    },
    [cart]
  );
  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );

  function handleUpdateCart() {
    updateCart(localCart);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-2 mx-auto bg-white md:max-w-6xl md:px-12 md:my-12 md:py-9">
      <Link className="ml-2 text-xl text-gray-500" to="/">
        <HiArrowLeft />
        Home
      </Link>
      <div className="flex-col items-center justify-between hidden px-4 mx-auto font-bold border bg-gray-50 md:flex md:h-12 md:max-w-5xl md:flex-row border-gray-default">
        <span className="md:w-16 bg-primary-default"></span>
        <span className="hidden bg-primary-default w-28 md:block"></span>
        <h1 className="md:w-72">Product</h1>
        <h1 className="md:w-24 ">Price</h1>
        <h2 className=" md:w-28">Quantity</h2>
        <h2 className="md:w-28">subtotal</h2>
      </div>
      <CartList
        items={products}
        onItemChange={onItemChange}
        localCart={localCart}
        setLocalCart={setLocalCart}
      />
      <div className="flex justify-between">
        <div>
          <input
            placeholder="Coupon code"
            className="px-4 py-2 mx-2 border border-gray-400 rounded-lg"
          />
          <button className="px-4 py-2 font-bold text-white rounded-lg bg-primary-default hover:bg-primary-dark">
            APPLY COUPON
          </button>
        </div>
        <button
          onClick={handleUpdateCart}
          className="px-4 py-2 font-bold text-white rounded-lg bg-primary-default hover:bg-primary-dark"
        >
          UPDATE CART
        </button>
      </div>
      <div className="flex flex-row-reverse">
        <div className="border-gray-400 w-96">
          <h1 className="px-2 font-bold border border-gray-400 h-14 text-md">
            Cart Total
          </h1>
          <div className="flex justify-between border border-gray-400 h-14">
            <h1 className="mx-2 font-bold text-md">subtotal</h1>
            <h1 className="md:w-40">Rs.500</h1>
          </div>

          <div className="flex justify-between h-12 border border-gray-400">
            <h1 className="mx-2 font-bold text-md">Total</h1>
            <h1 className="md:w-40">Rs.500</h1>
          </div>
          <div className="flex items-center">
            <button className="px-4 py-2 mx-auto font-bold text-white rounded-lg md:px-20 md:py-3 bg-primary-default hover:bg-primary-dark">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withCart(CartPage);
