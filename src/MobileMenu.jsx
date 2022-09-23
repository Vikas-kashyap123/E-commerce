import React from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="space-y-4 flex flex-col ">
      <Link to="/" className="hover:text-primary-dark">
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
      <Link to="/login" className="hover:text-primary-dark">
        Account
      </Link>
    </div>
  );
}

export default MobileMenu;
