import React from "react";

function Input({ name, label, id, touched, error, ...rest }) {
  let borderClass = " border-gray-300";

  if (touched && error) {
    borderClass = " border-primary-default";
  }

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={
          "relative block pl-3 w-full h-12 text-gray-800 bg-white border  appearance-none focus:z-10 focus-outline-none" +
          borderClass
        }
        {...rest}
      />
      {touched && error && <div className="text-primary-default">{error}</div>}
    </div>
  );
}

export default Input;
