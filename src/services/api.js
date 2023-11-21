import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("https://api.nanakargold.ir/products/");
  return response.data;
};

const getCategory = async () => {
  const response = await axios.get("https://api.nanakargold.ir/products/");
  return response;
};

const getPostPrice = async () => {
  const response = await axios.get("https://api.nanakargold.ir/postprice/");
  return response.data.post_price
  ;
};

console.log();

export { getProducts, getCategory, getPostPrice };
