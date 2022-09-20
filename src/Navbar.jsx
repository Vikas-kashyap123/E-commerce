import React from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="flex justify-between max-w-6xl mx-auto item-center">
        <div>
          <img
            className="h-9 w-28 "
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          />
        </div>
        <div className="flex gap-4">
          <div className="text-xl space-x-4 ">
            <a className="hover:text-primary-dark">Home</a>
            <a className="hover:text-primary-dark">Products</a>
            <a className="hover:text-primary-dark">About</a>
            <a className="hover:text-primary-dark">Contact</a>
            <Link className="hover:text-primary-dark" to="/login">
              Account
            </Link>
          </div>
          <div>
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
      </div>
    </div>
  );
}
export default Navbar;
