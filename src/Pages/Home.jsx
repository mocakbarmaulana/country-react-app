import React, { useState, useEffect } from "react";
import axios from "axios";

import CountryList from "../components/CountryList/CountryList";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const [listCountries, setListCountries] = useState([]);
  const [loadingTime, setLoadingTime] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    setLoadingTime(true);
    async function fetchCountries() {
      try {
        const resp = await axios.get("https://restcountries.eu/rest/v2/all");
        setListCountries(resp.data);
        setLoadingTime(false);
      } catch (err) {
        console.error(err);
        setLoadingTime(false);
        setErrorFetch(true);
      }
    }

    fetchCountries();
  }, []);

  return (
    <>
      {loadingTime && <Loading />}
      {listCountries.length > 0 && <CountryList countries={listCountries} />}
      {errorFetch && "Error.."}
    </>
  );
};

export default Home;
