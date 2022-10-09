import React from "react";
import { ImSpinner3 } from "react-icons/im";

function Loading({ extraClass }) {
  return (
    <div
      className={`flex flex-col items-center text-center justify-center my-auto font-bold text-primary-default md:text-8xl ${extraClass}`}
    >
      <div>
        <ImSpinner3 className="animate-spin" />
      </div>
      <div></div>
    </div>
  );
}
export default Loading;
