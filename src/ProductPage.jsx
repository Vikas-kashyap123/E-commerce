import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./Api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { HiArrowNarrowRight } from "react-icons/hi";


function ProductPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const xyz = getProductList();

    xyz.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    const LowerCaseTitle = item.title.toLowerCase();
    const LowerCaseQuery = query.toLowerCase();
    return LowerCaseTitle.indexOf(LowerCaseQuery) != -1;
  });
  if (sort == "lth") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "htl") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "title") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }
  function handleSortChange(event) {
    setSort(event.target.value);
  }

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl md:my-16 md:py-9 shadow-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-3 text-center sm:text-left">Home/Shop</h2>
        <h1 className="text-3xl text-center text-primary-default mb-7 sm:text-left">
          Shop
        </h1>
        <div className="pl-1 md:flex md:justify-between ">
          <input
            value={query}
            placeholder="search"
            className="mb-2 border border-gray-600"
            onChange={handleQueryChange}
          />
          <select
            onChange={handleSortChange}
            className="mb-2 border border-gray-600 "
          >
            <option value="default">Default sort </option>
            <option value="title">Sort by title</option>
            <option className="text-primary-dark" value="lth">
              Sort by price: low to high
            </option>
            <option value="htl">Sort by price: high to low</option>
          </select>
        </div>
        {data.length > 0 && <ProductList products={data} />}
        {(loading && <Loading />) || (data.length == 0 && <NoMatching />)}
        <div>
          <div className="flex gap-1 my-12">
            <div className="w-10 h-10 text-center text-white bg-primary-default">
              1
            </div>
            <div className="w-10 h-10 text-center border text-primary-default border-primary-dark hover:bg-primary-dark hover:text-white">
              2
            </div>
            <div className="w-10 h-10 text-center border text-primary-default border-primary-default hover:bg-primary-default hover:text-white">
              <HiArrowNarrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
