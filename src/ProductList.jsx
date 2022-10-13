import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 gap-4 mx-auto sm:grid-cols-3">
      {products.map(function (props) {
        return <Product key={props.id} {...props} />;
      })}
    </div>
  );
}
export default ProductList;
