import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Utils
import FilterCountry from "../../FilterCountry";
import Input from "../Input/Input";

import "./CountryList.css";
import { Link } from "react-router-dom";

// Components

function CountryList({ countries }) {
  const [filterCountries, setFilterCountries] = useState([]);
  const [serachText, setSearchText] = useState("");
  const [regionCountry, setRegionCountry] = useState("");

  useEffect(() => {
    setFilterCountries(FilterCountry(countries, serachText, regionCountry));
  }, [countries, serachText, regionCountry]);

  return (
    <div className="innerWidth">
      <Input
        change={(e) => setSearchText(e.target.value)}
        text={serachText}
        regionHanlde={(e) => setRegionCountry(e.target.value)}
      />
      <div className="countryGrid">
        {filterCountries.map((country, index) => (
          <Link to={`/country/${country.alpha3Code.toLowerCase()}`} key={index}>
            <div className="countryItem">
              <div className="imageCountry">
                <img
                  src={country.flag}
                  width="100%"
                  height="100%"
                  alt="logo flag"
                />
              </div>
              <ul className="countryInfo">
                <li className="linkInfo">
                  <h3>{country.name}</h3>
                </li>
                <li className="linkInfo">
                  <span>
                    <b>Population : </b>
                    {parseFloat(country.population).toLocaleString("en")}
                  </span>
                </li>
                <li className="linkInfo">
                  <span>
                    <b>Region : </b> {country.region}
                  </span>
                </li>
                <li className="linkInfo">
                  <span>
                    <b>Capital : </b>
                    {country.capital}
                  </span>
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

CountryList.propTypes = {
  countries: PropTypes.array,
};

export default CountryList;
