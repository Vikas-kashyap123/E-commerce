import React from "react";
import { ImSpinner3 } from "react-icons/im";

function Loading({ extraClass }) {
  return (
    <div
      className={`flex items-center mx-auto h-full text-center justify-center font-bold text-primary-default md:text-8xl text-6xl ${extraClass}`}
    >
      <ImSpinner3 className="animate-spin" />
    </div>
  );
}
export default Loading;
