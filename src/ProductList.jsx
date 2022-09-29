import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="grid gap-4 px-6 mx-auto sm:grid-cols-3">
      {products.map(function (props) {
        return <Product {...props} />;
      })}
    </div>
  );
}
export default ProductList;
