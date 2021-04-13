import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Styling
import "./Country.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const Country = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  // console.log(borders);
  return (
    <div className="country-box innerWidth">
      <Link to="/" className="btn-back">
        <KeyboardBackspaceIcon className="icon-back" />
        Back
      </Link>
      <div className="country">
        <div className="image-flag">
          <img src={flag} alt="flag country" />
        </div>
        <div className="country-info">
          <h1>{name}</h1>
          <div className="list-info">
            <ul>
              <li>
                <strong>Native Name: </strong>
                <span>{name}</span>
              </li>
              <li>
                <strong>Population: </strong>
                <span>{nativeName}</span>
              </li>
              <li>
                <strong>Region: </strong>
                <span>{region}</span>
              </li>
              <li>
                <strong>Sub Region: </strong>
                <span>{subRegion}</span>
              </li>
              <li>
                <strong>Capital: </strong>
                <span>{capital}</span>
              </li>
            </ul>

            <ul>
              <li>
                <strong>Top Level Domain: </strong>
                <span>{topLevelDomain[0]}</span>
              </li>
              <li>
                <strong>Currencies: </strong>
                <span>
                  {currencies[0].code[0].toUpperCase() +
                    currencies[0].code.slice(1).toLowerCase()}
                </span>
              </li>
              <li>
                <strong>Languages: </strong>
                {languages.map((el, index) => (
                  <span key={index}>
                    {el.name}
                    {index !== languages.length - 1 && ", "}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <div className="border-country">
            <strong className="title-border">Border Countries: </strong>
            <div className="list-border">
              {borders.map((e, index) => (
                <Link
                  to={`/country/${e.alpha3Code}`}
                  key={index}
                  className="btn-border"
                >
                  {e.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  flag: PropTypes.string,
};

export default Country;
