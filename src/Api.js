import axios from "axios";

export function getProductData(id) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then(function (response) {
      return response.data;
    });
}

export function getProductsIds(ids) {
  const commaSeperatedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSeperatedIds,
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function getProductList(sortBy, search, page, sortType) {
  let params = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then(function (response) {
      return response.data;
    });
}

// base url = https://dummyjson.com/
//fetch product list
// path = carts
// method = get

//fetch individual product
//path carts/1
// method = get

// headers: {
//   Authorization: localStorage.getItem("token"),
// }
