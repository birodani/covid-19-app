import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchDailyData } from './api/network.connector';
import style from './App.module.css'

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchDailyData();
    console.log(data);
  }
  render() {
    return (
      <div className={style.container}>
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
      </div>
    );
  }
}

export default App;
