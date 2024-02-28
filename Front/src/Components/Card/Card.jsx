import React from "react";
import style from "./Card.module.css";

const Card = ({ product }) => {
  const { container } = style;

  const handleWhatsAppClick = () => {
    const phoneNumber = "+54 9 3364 00-9781";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className={container}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.description} <br />{" "}
            <strong>
              {" "}
              ${product.value} - Stock: {product.stock}
            </strong>
          </p>
          <button onClick={handleWhatsAppClick} className="btn btn-primary">
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
