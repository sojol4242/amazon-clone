import React from "react";
// import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../reducer";
import { useSateValue } from "../../StateProvider";
// import FlipMove from "react-flip-move";
const Subtotal = () => {
  const [{ cart }, dispatch] = useSateValue();

  return (
    <>
    
        <h3>
          Subtotal ({cart.length} items) : <span>$ {getCartTotal(cart)}</span>
        </h3>
        <div className="input">
          <input type="checkbox" />{" "}
          <label htmlFor="">This order contains a gift</label>
        </div>
        <button className="checkout-btn"> Proceed to checkout </button>
    
    </>
  );
};

export default Subtotal;
