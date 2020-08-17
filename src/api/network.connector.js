const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) => {
    let changeableUrl = url;
  
    if (country) {
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
      return await fetch(`${url}/daily`)
      .then(res => { return res.json()});
    } catch (error) {
      return error;
    }
  };

  export default fetchDailyData;