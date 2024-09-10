import React from "react";

export const useProductsByCategory = (id) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProductsByCategory(id)
      .then((response) => {
        console.log(response);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return { products };
};
