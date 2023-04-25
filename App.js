import React from "react";
import Productlist from "./components/list";
import "./components/card.css";
import ProductCard from "./components/card";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
}

export default ProductList;