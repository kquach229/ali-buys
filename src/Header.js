import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();

  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://i.pinimg.com/originals/53/32/52/533252c810037ca9459b6a4821600a97.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Kenny</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionBasket header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
