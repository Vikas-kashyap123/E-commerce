import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { cartContext, updateContext } from "./App";

function CartRow({ thumbnail, title, price, id }) {
  const [loading, setLoading] = useState(false);

  const cartData = useContext(cartContext);
  const updateCart = useContext(updateContext);
  const [localCart, setLocalCart] = useState(cartData);

  function handleDelete(event) {
    const productId = event.currentTarget.getAttribute("productid");
    console.log("product going to be removed is", productId);

    useEffect(
      function () {
        setLocalCart(cartData);
      },
      [cartData]
    );

    const newCart = { ...cartData };
    delete newCart[productId];
    updateCart(newCart);
    setLoading(true);
  }

  function handleChange(event) {
    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productid");
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
    console.log("handleChange", newValue, productId);
  }

  return (
    <div className="flex-col items-center justify-between max-w-5xl px-4 py-2 mx-auto my-2 font-bold bg-white md:border md:flex md:flex-row border-gray-default">
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white">
        <span></span>
        <button
          productid={id}
          onClick={handleDelete}
          className="text-gray-500 md:w-16 hover:text-primary-dark"
        >
          X
        </button>
      </div>
      <div className="flex items-center justify-center mx-auto w-14 h-14 md:mr-16 sm:hidden md:block">
        <img className="w-full h-full " src={thumbnail} />
      </div>
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white ">
        <h1 className=" md:hidden">Product</h1>
        <h1 className="max-w-32 md:w-72 text-primary-default md:mr-4">
          {title}
        </h1>
      </div>
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white">
        <h1 className=" md:hidden">price</h1>
        <h2 className="md:w-24 ">{price}</h2>
      </div>
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white">
        <div className=" md:hidden">Quantity</div>
        <div className="w-6 md:w-28">
          <input
            type="number"
            productid={id}
            onChange={handleChange}
            value={localCart[id]}
            className="w-6 h-6 border md:w-10 md:h-10 border-gray"
          />
        </div>
      </div>
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white">
        <h2 className=" md:hidden">subtotal</h2>
        <h2 className="md:w-28">{price * cartData[id]}</h2>
      </div>
    </div>
  );
}

export default CartRow;
