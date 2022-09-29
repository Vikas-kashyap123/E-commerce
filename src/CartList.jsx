import React from "react";
import CartRow from "./CartRow";

function CartList({ items, localCart, setLocalCart }) {
  return (
    <div className="">
      {items.map(function (props) {
        return (
          <CartRow
            {...props}
            localCart={localCart}
            setLocalCart={setLocalCart}
          />
        );
      })}
    </div>
  );
}
export default CartList;
