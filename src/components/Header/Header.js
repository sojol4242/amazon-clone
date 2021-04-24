import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useSateValue } from "../../StateProvider";

function Header() {
  const [{ cart }, dispatch] = useSateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header-logo"
          className="logo"
        />
      </Link>
      <div className="header-search">
        <input className="search-bar" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        <div className="header-options">
          <span className="header-option-line-one">Returns</span>
          <span className="header-option-line-two"> & Order Two</span>
        </div>
        <div className="header-options">
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two"> Prime</span>
        </div>
        <Link to="login">
          <div className="header-options">
            <span className="header-option-line-one">Hello SoJOL</span>
            <span className="header-option-line-two"> Sign In</span>
          </div>
        </Link>
        <Link to="checkout">
          <div className="header-options-cart">
            <ShoppingCartIcon />
            <span className="header-option-line-two header-cart-count">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
