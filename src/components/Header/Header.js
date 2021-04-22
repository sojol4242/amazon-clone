import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="header-logo"
        className="logo"
      />
      <div className="header-search">
        <input className="search-bar" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        <div className="header-options">
          <span className="header-option-line-one">Hello SoJOL</span>
          <span className="header-option-line-two"> Sign In</span>
        </div>
        <div className="header-options">
          <span className="header-option-line-one">Hello Returns</span>
          <span className="header-option-line-two"> & Order Two</span>
        </div>
        <div className="header-options">
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two"> Prime</span>
        </div>
        <div className="header-options-cart">
          <ShoppingCartIcon/>
          <span className="header-option-line-two header-cart-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
