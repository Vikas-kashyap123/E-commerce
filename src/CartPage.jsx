import React, { useState } from "react";
import CartList from "./CartList";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getProductData } from "./Api";
import Loading from "./Loading";
import { useContext } from "react";
import { cartContext, updateContext } from "./App";
import { useEffect } from "react";

function CartPage({ onItemChange }) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const updateCart = useContext(updateContext);
  const cartData = useContext(cartContext);
  console.log("provider ka data", cartData);
  const [localCart, setLocalCart] = useState(cartData);

  const cartIds = Object.keys(cartData);

  useEffect(
    function () {
      setLoading(true);
      const promises = cartIds.map(function (productId) {
        return getProductData(productId);
      });
      const bigPromise = Promise.all(promises);

      bigPromise.then(function (products) {
        console.log("promises ka data", products);
        setProducts(products);
        setLoading(false);
      });
    },
    [cartData]
  );
  useEffect(
    function () {
      setLocalCart(cartData);
    },
    [cartData]
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
      <div
        className="flex-col items-center justify-between hidden px-4 mx-auto font-bold
       border bg-gray-50 md:flex md:h-12 md:max-w-5xl md:flex-row border-gray-default"
      >
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
export default CartPage;
{
  /* 
      <div className="flex items-center justify-between max-w-4xl ">
        <h2>x</h2>
        <div className="w-20">
          <img src="https://trycasuals.com/wp-content/uploads/2018/06/tshirt6-4-300x300.jpg" />
        </div>
        <div className="text-primary-default">Fathers Day Coffee mug</div>
        <h1>200</h1>
        <h2>2</h2>
        <h2>400</h2>
      </div> */
}
