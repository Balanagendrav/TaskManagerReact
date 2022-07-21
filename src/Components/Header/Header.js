import { React } from "react";
import "./Header.css";

const Header = () => {
  const title = "Bala Nagendra";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top pt-3 pb-3 navbar-container">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" href="#">
              Home
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#">
              Products
            </a>
            <a className="nav-link" href="#">
              Cart
            </a>
            <div className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2 search-item m-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-transparent m-0" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
            <a className="nav-link" href="#">
              <i
                className="bi bi-person-check-fill btn btn-light btn-lg p-0 m-0"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title={title}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
