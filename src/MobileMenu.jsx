import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { withUser } from "./withProvider";

function MobileMenu({ setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  return (
    <div className="flex flex-col space-y-4 md:hidden ">
      <Link to="/" className="font-bold hover:text-primary-dark ">
        Home
      </Link>
      <Link to="/" className="font-bold hover:text-primary-dark">
        Products
      </Link>
      <Link to="/" className="font-bold hover:text-primary-dark">
        About
      </Link>
      <Link to="/" className="font-bold hover:text-primary-dark">
        Contact
      </Link>
      <Link to="/login" className="font-bold hover:text-primary-dark">
        Account
      </Link>
      <button
        onClick={handleLogout}
        className="font-black hover:text-primary-light text-primary-dark "
      >
        Logout
      </button>
    </div>
  );
}

export default withUser(MobileMenu);
