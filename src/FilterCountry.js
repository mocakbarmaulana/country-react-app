const FilterCountry = (
  listCountries,
  searchCountry = "",
  regionCountry = ""
) => {
  const filterCountry = listCountries.filter((country) => {
    if (
      country.name.toLowerCase().includes(searchCountry.toLowerCase()) &&
      country.region.toLowerCase().includes(regionCountry.toLowerCase())
    ) {
      return true;
    }

    // if (country.region.toLowerCase().includes(regionCountry.toLowerCase())) {
    //   return true;
    // }

    return false;
  });

  return filterCountry;
};

export default FilterCountry;
