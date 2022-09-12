import React, { useEffect } from "react";

function NoMatching({ children }) {
  useEffect(function () {}, []);
  return (
    <div className="p-2 text-2xl text-white bg-primary-default">
      No Matching results found
    </div>
  );
}

export default NoMatching;
