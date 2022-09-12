import React from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="flex justify-between max-w-6xl mx-auto item-center">
        <img
          className="h-9 w-28 "
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
        <Link to="/cart">
          <div className="flex flex-col items-center justify-center">
            <BsMinecartLoaded className="pb-1 text-4xl text-primary-default hover:text-primary-dark" />
            <span className="-m-8 text-primary-default hover:text-primary-dark">
              {productCount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
