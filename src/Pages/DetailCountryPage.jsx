import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Country from "../components/Country/Country";
import Loading from "../components/Loading/Loading";

const FetchBorderCountry = (code) => {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${code}`).then((res) =>
    res.json()
  );
};

const DetailCountryPage = () => {
  const { alphaCode } = useParams();
  const [country, setCountry] = useState({});
  const [borders, setBordes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setBordes([]);
    const FetchCountry = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${alphaCode}`
        );
        setCountry(res.data);

        // Looping total borders setelah Country berhasil di panggil
        for (let i = 0; i < res.data.borders.length; i++) {
          // Call Function FetchBorder dan lakukan concar pada setBorder
          const { name, alpha3Code } = await FetchBorderCountry(
            res.data.borders[i]
          );
          setBordes((borders) => [...borders, { name, alpha3Code }]);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      }
      setLoading(false);
    };

    FetchCountry();
  }, [alphaCode]);

  return (
    <>
      {loading && <Loading />}
      {Object.keys(country).length !== 0 && (
        <Country
          flag={country.flag}
          name={country.name}
          nativeName={country.nativeName}
          region={country.region}
          subRegion={country.subregion}
          capital={country.capital}
          topLevelDomain={country.topLevelDomain}
          currencies={country.currencies}
          languages={country.languages}
          borders={borders}
        />
      )}
    </>
  );
};

export default DetailCountryPage;
