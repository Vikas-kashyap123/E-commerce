import React from "react";
import { GiBoomerangCross } from "react-icons/Gi";

// import { IoCutSharp } from "react-icons/Io";

function CartRow({ imgUrl, title, price }) {
  return (
    <div className="flex-col items-center justify-between max-w-5xl px-4 py-2 mx-auto my-2 font-bold bg-white md:border md:flex md:flex-row border-gray-default">
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white">
        <span></span>
        <div className="text-gray-500 md:w-16 hover:text-primary-dark">
          <GiBoomerangCross />
        </div>
      </div>
      <div className="flex items-center w-14 h-14 sm:hidden md:block">
        <img className="w-full h-full " src={imgUrl} />
      </div>
      <div className="flex items-center justify-between h-10 px-2 border border-gray-default md:border-white ">
        <h1 className=" md:hidden">Product</h1>
        <h1 className="max-w-32 md:w-72 text-primary-default">{title}</h1>
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
            placeholder="1"
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
