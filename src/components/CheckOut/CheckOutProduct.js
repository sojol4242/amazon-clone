import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { useSateValue } from "../../StateProvider";

const CheckOutProduct = ({id,rating,price,title,img}) => {
 
  const [{cart}, dispatch] = useSateValue();


  const removeFromCart=() => {
  dispatch({
    type: "REMOVE_FROM_CART",
    id:id
  })
  }


  return (
    <div className="checkout-products">
      <img className="checkout-products-image" src={img} alt={title} />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">Price : <span>${price}</span></p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="start" className="product-start" />
            ))}
        </div>
        <button className="checkout-btn remove-btn" onClick={removeFromCart}>Remove from cart</button>

      </div>
    </div>
  );
};

export default CheckOutProduct;
