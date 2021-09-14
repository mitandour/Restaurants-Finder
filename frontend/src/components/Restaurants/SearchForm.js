import React from 'react'
import { IconButton, makeStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect } from 'react';
import { useState } from 'react';
import { fromSearchString } from '../../utils/formatData';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  searchDiv: {
    position: 'relative',
    textAlign: 'center',
    margin: 'auto',
    width: 745,
    height: '30%',
  },
  search: {
    width: 300,
    display: 'inline-block',
    margin: theme.spacing(2),
    color: theme.palette.common.white,
  },
  searchIcon: {
    marginTop: 80,
  },  
  field: {
    color : theme.palette.common.white
  }
}));

export default function SearchForm(props) {
  const classes = useStyles();
  const API_BASE_URL = 'http://localhost:3030/api';

  const [cities, setCities] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  const { filters, handleChange, handleSearch } = props;

  const fetchCities = () => {
    fetch(API_BASE_URL + '/cities')
      .then(response => response.json())
      .then((data) => {
        setCities(data);
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  const fetchCuisines = () => {
    fetch(API_BASE_URL + '/cuisines')
      .then(response => response.json())
      .then((data) => {
        setCuisines(data);
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  useEffect(() => {
    fetchCities();
    fetchCuisines();
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  }

  // format parameters from URl and check to which option list they beling to
  const getOptionSelected = (value,key, options) => {
    if (value) {
      const formattedValue = fromSearchString(value);
      if (options.map(option => option[key]).includes(formattedValue)) return formattedValue;
      return '';
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className={classes.searchDiv} >
      <Autocomplete
        className={classes.search}
        options={cities.map((option) => option.city)}
        onChange={(event, value) => { handleChange('city', value); }}
        value={getOptionSelected(filters.city, 'city', cities)}
          renderInput={(params) => (
            <TextField className={classes.field} {...params} label="CITY" margin="normal" />
          )}
        />
      <Autocomplete
        className={classes.search}
        options={cuisines.map((option) => option.name)}
        onChange={(event, value) => {handleChange('cuisine',value);}}
        value={getOptionSelected(filters.cuisine, 'name', cuisines)}
        renderInput={(params) => (
            <TextField className={classes.field} {...params} label="CUISINE" margin="normal" />
          )}
      />
      <IconButton className={classes.searchIcon}  type='submit'>
          <SearchIcon />
      </IconButton>
     
    </form>
  )
}

SearchForm.propTypes = {
  filters: PropTypes.object,
  handleChange: PropTypes.func,
  handleSearch: PropTypes.func
};