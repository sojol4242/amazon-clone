import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import { useSateValue } from "../../StateProvider";
import { auth } from "../../Firebase";

function Header() {
  const [{ cart, user }, dispatch] = useSateValue();
  // const history = useHistory();
  const authenticationHandle = () => {
    if (user) {
      auth.signOut();
      // history.push("/home");
    } else {
    }
  };

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
        <Link to={!user && '/login'}>
          <div className="header-options" onClick={authenticationHandle}>
            <span className="header-option-line-one">Hello,{user?.email}</span>
            <span className="header-option-line-two">
              {user ? "Sign out" : "Sign in"}
            </span>
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
