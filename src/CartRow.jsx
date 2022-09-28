import React, { useState } from "react";
import { useContext } from "react";
import { cartContext, CountContext } from "./App";
import { getProductData } from "./Api";

function CartRow({ thumbnail, title, price, onItemChange, Quanity }) {
  const [quantity, setQuantity] = useState(Quanity);
  const [cart, setCart] = useState();

  const cartInfo = useContext(cartContext);
  const countId = useContext(CountContext);
  console.log("countId id", countId);
  console.log("provider cartRow ka data", cartInfo);

  const id = Object.keys(cartInfo);
  console.log("cartRow wli id", id);

  const Cartquantity = Object.values(cartInfo).map(function (productQuantity) {
    return getProductData(productQuantity);
  });
  console.log("Cartquantity wali info", Cartquantity);

  // const bigPromise = Promise.all(Cartquantity);

  // bigPromise.then(function (cart) {
  //   setCart(cart);
  // });
  // console.log("cart in CartRow is", cart);

  function quantityChange(event) {
    setQuantity(+event.target.value);
    onItemChange(id, quantity);
  }

  function deleteData() {
    setEnable(0);
  }

  if (quantity == 0) {
    return <div></div>;
  }

  return (
    <div className="flex-col items-center justify-between max-w-5xl px-4 py-2 mx-auto my-2 font-bold bg-white md:border md:flex md:flex-row border-gray-default">
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white">
        <span></span>
        <button
          onClick={deleteData}
          className="text-gray-500 md:w-16 hover:text-primary-dark"
        >
          X
        </button>
      </div>
      <div className="flex items-center justify-center w-14 h-14 md:mr-16 sm:hidden md:block">
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
            onChange={quantityChange}
            value={Cartquantity}
            className="w-6 h-6 border md:w-10 md:h-10 border-gray"
          />
        </div>
      </div>
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white">
        <h2 className=" md:hidden">subtotal</h2>
        <h2 className="md:w-28">{price * 2}</h2>
      </div>
    </div>
  );
}

export default CartRow;
