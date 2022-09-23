import React, { useState } from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";

function Navbar({ productCount }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function handleMenuOpeneClick() {
    setMenuOpen(!isMenuOpen);
  }

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
          <div className="text-xl space-x-4 hidden md:block ">
            <Link className="hover:text-primary-dark" to="/">
              Home
            </Link>
            <Link to="/" className="hover:text-primary-dark">
              Products
            </Link>
            <Link to="/" className="hover:text-primary-dark">
              About
            </Link>
            <Link to="/" className="hover:text-primary-dark">
              Contact
            </Link>
            <Link className="hover:text-primary-dark" to="/login">
              Account
            </Link>
          </div>

          <div className="flex gap-4">
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
            <div>
              <GiHamburgerMenu
                onClick={handleMenuOpeneClick}
                className="hover:text-primary-dark text-5xl pt-3 md:hidden"
              />
              {isMenuOpen && <MobileMenu className="md:hidden" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
