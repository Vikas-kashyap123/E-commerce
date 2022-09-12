import axios from "axios";

export function getProductData(id) {
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then(function (response) {
      return response.data;
    });
}

export function getProductList() {
  return axios.get("https://dummyjson.com/products").then(function (response) {
    return response.data.products;
  });
}

// base url = https://dummyjson.com/
//fetch product list
// path = carts
// method = get

//fetch individual product
//path carts/1
// method = get
