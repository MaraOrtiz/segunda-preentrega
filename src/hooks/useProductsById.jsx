import React from "react";
import { getAllProductById } from "../services/products.service";

export const useProductsById = () => {
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAllProductById(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { product, loading };
};
