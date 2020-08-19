const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country && country !== 'World Wide') {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const data = await fetch(changeableUrl).then(resp => resp.json());
    return data;
  } catch (error) {
    return error;
  }
};


export const fetchDailyData = async () => {
  try {
    const response = await fetch(`${url}/daily`).then(res => res.json());
    return response;
  } catch (error) {
    return error;
  }
};


export const fetchCountries = async () => {
  try {
    const response = await fetch(`${url}/countries`).then(res => res.json());
    const extendedResp = addWorldWideToCountryList(response.countries);
    return extendedResp.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

const addWorldWideToCountryList = (countries) => {
   return [...countries, {name: 'World Wide'}];
}

export default fetchDailyData;