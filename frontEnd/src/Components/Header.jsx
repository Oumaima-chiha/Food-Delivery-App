import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const token = window.localStorage.getItem("token");

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
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to={"/addFood"}
                >
                  Add food
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {!token ? (
                  <Link className="nav-link" id="center" to="/logIn">
                    Menu
                  </Link>
                ) : (
                  <Link className="nav-link" id="center" to="/menu">
                    Menu
                  </Link>
                )}
              </li>
             
            </ul>
            <ul className="navbar-nav ">
                <li className="nav-item">
                  <input placeholder="search..."/>
                  </li>
                  </ul>
            <div>
              <a href="cart" className="order_online">
                Cart
              </a>
            </div>
          
            {!token ? (
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href={"signup"}>
                    Sign Up<span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => window.localStorage.removeItem("token")}
                    href={"login"}
                  >
                    Logout<span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
