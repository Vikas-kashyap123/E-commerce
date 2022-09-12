import React from "react";
import CartRow from "./CartRow";

function CartList({ items }) {
  return (
    <div className="">
      {items.map(function (props) {
        return <CartRow {...props} />;
      })}
    </div>
  );
}
export default CartList;
