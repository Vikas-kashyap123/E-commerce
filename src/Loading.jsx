import React from "react";
import { ImSpinner3 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex flex-col font-bold place-items-center text-primary-default md:text-8xl">
      <div>
        <ImSpinner3 className="animate-spin" />
      </div>
      <div></div>
    </div>
  );
}
export default Loading;
