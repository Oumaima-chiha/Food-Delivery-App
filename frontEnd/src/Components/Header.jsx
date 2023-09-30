import React from "react";

const Header = ({ switchView, view }) => {
  console.log(view);
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navigbar ">
          <a className="navbar-brand" href="index.html">
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
                <p
                  className="nav-link"
                  onClick={() => {
                    switchView("addfood");
                  }}
                >
                  Add food<span className="sr-only">(current)</span>
                </p>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link"
                  href="menu"
                  onClick={() => {
                    switchView("menu");
                  }}
                >
                  Menu
                </p>
              </li>
            </ul>
            <div>
              <a href="menu" className="order_online">
                Order Online
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
