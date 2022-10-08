import React from "react";

function Button(props) {
  return (
    <button
      {...props}
      className="disabled:bg-primary-light max-w-xs px-8 py-2 text-sm font-bold
       text-white rounded-md bg-primary-default hover:bg-primary-dark"
    />
  );
}

export default Button;
