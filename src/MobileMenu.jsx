import React from "react";
import { Link } from "react-router-dom";

import { withUser } from "./withProvider";

function MobileMenu({ setUser, isLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  return (
    <div className="absolute flex flex-col w-20 px-2 py-2 mr-10 space-y-4 bg-indigo-400 md:hidden">
      <Link to="/" className="mr-4 font-bold hover:text-primary-dark">
        Home
      </Link>
      <Link to="/" className="mr-4 font-bold hover:text-primary-dark">
        Products
      </Link>
      <Link to="/" className="mr-4 font-bold hover:text-primary-dark">
        About
      </Link>
      <Link to="/" className="mr-4 font-bold hover:text-primary-dark">
        Contact
      </Link>
      <Link to="/login" className="mr-4 font-bold hover:text-primary-dark">
        Account
      </Link>
      {isLoggedIn ? (
        <a
          href="login"
          onClick={handleLogout}
          className="mr-4 font-black hover:text-primary-light text-primary-dark"
        >
          Logout
        </a>
      ) : (
        <a
          href="login"
          className="mr-4 font-black hover:text-primary-light text-primary-dark"
        >
          Login
        </a>
      )}
    </div>
  );
}

export default withUser(MobileMenu);
