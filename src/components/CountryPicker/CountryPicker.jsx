import React, { useEffect, useState } from 'react';
import styles from './CountryPicker.module.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fetchCountries } from '../../api/network.connector';

const CountryPickerComponent = ({ handleCountryChange }) => {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      await fetchCountries().then(data => {
        setCountries(data)
        console.log(data)
      }
        );
    };

    fetchAPI();
  }, []);

  return (
  <Autocomplete
      id="combo-box-demo"
      options={countries}
      getOptionLabel={(country) => country}
      style={{ width: 300 }}
      onChange={(event,values) => handleCountryChange(values)}
      renderInput={(params) => <TextField {...params} label="Country search" variant="outlined" />}
    >
      <option value="">Global</option> 
    </Autocomplete>)
};

export default CountryPickerComponent;