import React from 'react';
import styles from './CountryPicker.module.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CountryPickerComponent = () => (
  <Autocomplete
      id="combo-box-demo"
      options={countryOptons}
      getOptionLabel={(option) => option.country}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country search" variant="outlined" />}
    >
      <option value="">Global</option> 
    </Autocomplete>
);

const countryOptons = [
  { country: 'Hungary' },
  { country: 'Italy'}]

export default CountryPickerComponent;