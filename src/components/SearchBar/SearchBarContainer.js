// You do not need to change any code in this file
import React from "react";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">

      <div className="image-wrapper">
        <img className="fab fa-instagram" src="../../assets/instagram-logo-concept.jpg" alt="instagram logo" />

      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
