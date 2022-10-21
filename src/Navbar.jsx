import React, { useState } from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
import { withCart } from "./withProvider";

function Navbar({ cartCount }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function handleMenuOpeneClick() {
    setMenuOpen(!isMenuOpen);
  }

  const links = [
    {
      id: 1,
      link: "Home",
      Route: "/",
    },
    {
      id: 2,
      link: "Products",
      Route: "/",
    },
    {
      id: 3,
      link: "About",
      Route: "/",
    },
    {
      id: 4,
      link: "Contact",
      Route: "/",
    },
    {
      id: 5,
      link: "Account",
      Route: "login",
    },
  ];

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
          {links.map(({ link, id, Route }) => (
            <div key={id} className="hidden space-x-4 text-xl md:block ">
              <Link
                className={
                  "hover:text-primary-dark " +
                  (link == links[id] ? "text-primary-default" : "text-gray-500")
                }
                to={Route}
              >
                {link}
              </Link>
            </div>
          ))}
          {/* <div className="hidden space-x-4 text-xl md:block ">
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
          </div> */}

          <div className="flex gap-4">
            <div>
              <Link to="/cart">
                <div className="flex flex-col items-center justify-center">
                  <BsMinecartLoaded className="pb-1 text-4xl text-primary-default hover:text-primary-dark" />
                  <span className="-m-8 text-primary-default hover:text-primary-dark">
                    {cartCount}
                  </span>
                </div>
              </Link>
            </div>
            <div>
              <GiHamburgerMenu
                onClick={handleMenuOpeneClick}
                className="pt-3 text-5xl hover:text-primary-dark md:hidden"
              />
              {isMenuOpen && <MobileMenu className="md:hidden" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withCart(Navbar);
