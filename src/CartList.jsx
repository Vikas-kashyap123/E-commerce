import { template } from "lodash";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import { withCart } from "./withProvider";
import Loading from "./Loading";

function CartList({ cart, updateCart }) {
  const [quantityMap, setQuantityMap] = useState();
  const [loading, setLoading] = useState(true);

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

  useEffect(
    function () {
      setQuantityMap(cartToQuantityMap());
      setLoading(false);
    },
    [cart]
  );

  function handleQuanityChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }

  function handeUpdateCartClick() {
    updateCart(quantityMap);
  }

  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex px-4 py-2 space-x-4 bg-gray-100 border border-gray-300 ">
        <span className="hidden ml-28 grow md:block">Product</span>
        <span className="hidden w-20 md:block">Price</span>
        <span className="hidden w-32 md:block">Quantity</span>
        <span className="hidden w-20 md:block">Subtotal</span>
      </div>
      {cart.map((cartItem) => (
        <CartRow
          key={cartItem.product.id}
          product={cartItem.product}
          quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
          onQuantityChange={handleQuanityChange}
          onRemove={handleRemove}
        />
      ))}
      <div className="flex justify-end px-4 py-2 border border-gray-300">
        <Button onClick={handeUpdateCartClick}>Update Cart</Button>
      </div>
    </div>
  );
}

export default withCart(CartList);
