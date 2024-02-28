import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ products }) => {
  const { container } = style;
  return (
    <div className={container}>
      {products && products.length > 0 ? (
        products.map((product) => <Card product={product} key={product.id} />)
      ) : (
        <p>No hay productos todavia</p>
      )}
    </div>
  );
};

export default Cards;
