import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="First_header">
        <div>
          <form class="form_first">
            <button class="button_1" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              class="input_1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="link">
          <Link to="#">SHOPPERS</Link>
        </div>
        <div className="icon">
          <i class="fa-solid fa-user"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
      <div className="dropdown-main">
        <ul>
          <li>
            <span>HOME</span>
            <i class="fa-solid fa-angle-down"></i>
          </li>
          <li>
            <span>ABOUT</span>
            <i class="fa-solid fa-angle-down"></i>
          </li>
          <li>SHOP</li>
          <li>CATALOGUE</li>
          <li>NEW ARRIVALS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
