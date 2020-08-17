import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/network.connector';
import style from './App.module.css'

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    fetchData().then(data => this.setState( {data: data}));
  }
  render() {
    const { data } = this.state;
    console.log();
    return (
      <div className={style.container}>
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
        {JSON.stringify(data)}
      </div>
    );
  }
}

export default App;
