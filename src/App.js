import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData, fetchCountries } from './api/network.connector';
import style from './App.module.css'
import { combineLatest, merge } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    fetchData().then(data => this.setState({ data}));
  }

  handleCountryChange = async (country) => {
    fetchData(country).then(data => this.setState({ data, country: country })); 
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <Cards data={data}></Cards>
        <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart></Chart>
        {JSON.stringify(country)}
      </div>
    );
  }
}

export default App;
