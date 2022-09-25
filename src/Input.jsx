import { useField } from "formik";
import React from "react";

function Input({ name, label, id, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;

  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;

  let borderClass = "border-gray-300";

  if (error && touched) {
    borderClass = "border-primary-default";
  }

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        {...rest}
        className={
          "relative block pl-3 w-full h-12 text-gray-800 bg-white border  appearance-none focus:z-10 focus-outline-none" +
          borderClass
        }
      />
      {touched && error && <div className="text-primary-default">{error}</div>}
    </div>
  );
}

export default Input;
