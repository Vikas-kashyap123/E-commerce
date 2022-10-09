import React from "react";

function Button(props) {
  return (
    <button
      {...props}
      className="max-w-xs px-8 py-2 text-sm font-bold text-white rounded-md disabled:bg-primary-light bg-primary-default hover:bg-primary-dark"
    />
  );
}

export default Button;
