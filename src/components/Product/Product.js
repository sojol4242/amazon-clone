import React from "react";
import "./product.css";
import StarIcon from "@material-ui/icons/Star";
import { AddShoppingCart } from "@material-ui/icons";
import { useSateValue } from "../../StateProvider";
const Product = ({ product }) => {
 

  const [{cart}, dispatch] = useSateValue();
  console.log(cart);
  const { key, name, price, img, star } = product;

  const addToCart = () => {
    // dispatch some action;
    dispatch({
      type: "ADD_SHOPPING_CART",
      item: {
        id: key,
        title: name,
        image: img,
        price: price,
        rating: star,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{name}</p>
        <p className="product-price">
          Price : <small>$</small> <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(star)
            .fill()
            .map((_, i) => (
              <StarIcon className="start" className="product-start" />
            ))}
        </div>
      </div>

      <img src={img} alt={name} />
      <button className="cart_btn" onClick={addToCart}>
        <AddShoppingCart /> Add Cart
      </button>
    </div>
  );
};

export default Product;
