import React from "react";
import "./product.css";
import StarIcon from "@material-ui/icons/Star";
import { AddShoppingCart } from "@material-ui/icons";
const Product = ({ product }) => {
  console.log(product);
  const { name, price, img, star } = product;
  return (
    <div className="product">
      <div className="product-info">
        <p>{name}</p>
        <p className="product-price">
          Price : <small>$</small> <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(star).fill().map((_, i) => (
            <StarIcon className="start" className="product-start"/>
          ))}
        </div>
      </div>

      <img src={img} alt={name} />
      <button className="cart_btn">
        <AddShoppingCart /> Add Cart
      </button>
    </div>
  );
};

export default Product;
