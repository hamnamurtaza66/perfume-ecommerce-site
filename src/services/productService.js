import products from "../data/products";

export const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === Number(id))), 500);
  });
};