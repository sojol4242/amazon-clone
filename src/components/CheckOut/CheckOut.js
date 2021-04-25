import React from "react";
import { Link } from "react-router-dom";
import { useSateValue } from "../../StateProvider";
import "./checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
const CheckOut = () => {
  const [{ cart, user }, dispatch] = useSateValue();
  console.log(user);

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt="checkout_ad"
        />
        <div className="cart-header">
          {user&&<h3>Hello , {user?.email}</h3>}

          <h2 className="checkout-title">Your Shopping Cart</h2>
          <Link to="/">Deselect All Items</Link>
        </div>
        {cart.length > 0 ? (
          <div className="checkout-product">
            {cart.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                img={item.image}
              />
            ))}
          </div>
        ) : (
          <div className="checkout-product">
          

            <h3>No Product Available in cart</h3>
          </div>
        )}
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckOut;
