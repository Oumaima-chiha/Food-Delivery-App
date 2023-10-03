import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navigbar ">
          <a className="navbar-brand" href="/">
            <span>Take Away</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item">
                <NavLink
                  className={({isActive})=>isActive?"nav-link active":"nav-link"}
                  to={'/addFood'}
                >
                  Add food
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({isActive})=>isActive?"nav-link active":"nav-link"}
                  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="menu"
                  onClick={() => {
                  }}
                >
                  Menu
                </a>
              </li>
            </ul>
            <div>
              <a href="menu" className="order_online">
                Order Online
              </a>
            </div>
            <div>
              <li  className="nav-item">
                <a
                  className="nav-link"
                 href={"signup"}
                >
                 Sign Up<span className="sr-only">(current)</span>
                </a>
              </li>

              </div>
              <div>
              <li  className="nav-item">
                <a
                  className="nav-link"
                  href={"login"}
                >
                Log In <span className="sr-only">(current)</span>
                </a>
              </li>

              </div>


          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;