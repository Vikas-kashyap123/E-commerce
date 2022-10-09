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

export function loginApi() {
  return axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log("MyData", bag);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("Invalid Credentials");
    });
}

// base url = https://dummyjson.com/
//fetch product list
// path = carts
// method = get

//fetch individual product
//path carts/1
// method = get
