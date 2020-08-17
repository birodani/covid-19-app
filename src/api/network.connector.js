
const url = 'https://covid19.mathdro.id/api';

export const fetchDailyData = async () => {
    try {
      return await fetch(`${url}/daily`)
      .then(res => { return res.json()});
    } catch (error) {
      return error;
    }
  };

  export default fetchDailyData;