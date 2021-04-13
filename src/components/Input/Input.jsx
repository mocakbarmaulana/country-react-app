import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = ({ text, change, regionHanlde }) => {
  return (
    <div className="input">
      <div className="searchBox">
        <div className="icon-search">
          <i className="fas fa-search"></i>
        </div>
        <input
          value={text}
          onChange={change}
          type="text"
          className="input-search"
          placeholder="Search for a country..."
        />
      </div>
      <div className="regionOption">
        <select onChange={regionHanlde} className="select-region">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string,
  change: PropTypes.func,
  regionHanlde: PropTypes.func,
};

export default Input;
