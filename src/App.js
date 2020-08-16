import React from 'react';
import './App.css';
import { Cards, CountryPicker, Chart } from './components';

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
      </div>
    );
  }
}

export default App;
