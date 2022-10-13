import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./Api";
import NoMatching from "./NoMatching";
// import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "./Button";
import { withAlert, withUser } from "./withProvider";
import Loading from "./Loading";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";

function ProductPage({ setUser, setAlert, user }) {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);
  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";
  page = +page || 1;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  useEffect(
    function () {
      let sortType;
      let sortBy;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "LTH") {
        sortBy = "price";
      } else if (sort == "HTL") {
        sortBy = "price";
        sortType = "desc";
      }

      getProductList(sortBy, query, page, sortType).then(function (xyz) {
        setProductData(xyz);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handleQueryChange(event) {
    setSearchParams({ ...params, query: event.target.value, page: 1 });
  }
  function handleSortChange(event) {
    setSearchParams({ ...params, sort: event.target.value });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl px-3 mx-auto bg-white shadow-2xl md:my-16 md:py-9 shadow-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-3 text-center sm:text-left">Home/Shop</h2>
        <h1 className="text-3xl text-center text-primary-default mb-7 sm:text-left">
          Shop
        </h1>
        <div className="pl-1 md:flex md:justify-between ">
          <input
            value={query}
            placeholder="search"
            className="px-2 mb-2 border border-gray-600"
            onChange={handleQueryChange}
          />
          <select
            onChange={handleSortChange}
            className="mb-2 border border-gray-600 "
          >
            <option value="default">Default sort </option>
            <option value="title">Sort by title</option>
            <option value="LTH">Sort by price: low to high</option>
            <option value="HTL">Sort by price: high to low</option>
          </select>
        </div>
        {productData.data.length > 0 && (
          <ProductList products={productData.data} />
        )}
        {productData.data.length == 0 && <NoMatching />}
        <div className="flex justify-between">
          <div className="flex gap-1 my-12">
            {range(1, productData.meta.last_page + 1).map((pageNumber) => (
              <Link
                className={
                  " w-10 h-10 text-center border border-primary-dark hover:bg-primary-dark hover:text-white " +
                  (pageNumber == page
                    ? "bg-primary-default text-white"
                    : "bg-white text-primary-default ")
                }
                key={pageNumber}
                to={"?" + new URLSearchParams({ ...params, page: pageNumber })}
              >
                {pageNumber}
              </Link>
            ))}
          </div>
          <div className="my-12">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withUser(withAlert(ProductPage));

// if (sort == "lth") {
//   data.sort(function (x, y) {
//     return x.price - y.price;
//   });
// } else if (sort == "htl") {
//   data.sort(function (x, y) {
//     return y.price - x.price;
//   });
// } else if (sort == "title") {
//   data.sort(function (x, y) {
//     return x.title < y.title ? -1 : 1;
//   });
// }

//  let data = productList.filter(function (item) {
//    const LowerCaseTitle = item.title.toLowerCase();
//    const LowerCaseQuery = query.toLowerCase();
//    return LowerCaseTitle.indexOf(LowerCaseQuery) != -1;
//  });

//
