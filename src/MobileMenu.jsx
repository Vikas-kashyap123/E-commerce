import React from "react";
import { Link } from "react-router-dom";
import { withUser } from "./withProvider";

function MobileMenu({ setUser, isLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  return (
    <div className="">
      <div className="absolute flex flex-col px-3 py-2 space-y-4 overflow-auto bg-indigo-400 border border-indigo-800 rounded-sm md:hidden">
        <Link
          to="home"
          className="font-bold border border-indigo-400 hover:text-primary-dark border-b-gray-500"
        >
          Home
        </Link>
        <Link
          to="/"
          className="font-bold border border-indigo-400 hover:text-primary-dark border-b-gray-500"
        >
          Products
        </Link>
        <Link
          to="/"
          className="font-bold border border-indigo-400 hover:text-primary-dark border-b-gray-500"
        >
          About
        </Link>
        <Link
          to="contact"
          className="font-bold border border-indigo-400 hover:text-primary-dark border-b-gray-500"
        >
          Contact
        </Link>
        <Link
          to="/"
          className="font-bold border border-indigo-400 hover:text-primary-dark border-b-gray-500"
        >
          Account
        </Link>
        {isLoggedIn ? (
          <a
            href="login"
            onClick={handleLogout}
            className="font-black border-indigo-400 border-b-gray-500 hover:text-primary-light text-primary-dark"
          >
            Logout
          </a>
        ) : (
          <a
            href="login"
            className="font-black border-indigo-400 border-b-gray-500 hover:text-primary-light text-primary-dark"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
}

export default withUser(MobileMenu);
