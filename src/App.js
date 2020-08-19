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
    combineLatest(fetchData(), fetchCountries())
      .pipe(distinctUntilChanged())
      .subscribe(data => this.setState({ data: data[0], countries: data[1] }));
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
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
