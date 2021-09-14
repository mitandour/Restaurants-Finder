import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Layouts/Header';
import Restaurant from '../components/Restaurants/Restaurant';
import Footer from '../components/Layouts/Footer';
import { Paper, Typography } from '@material-ui/core';
import SearchForm from '../components/Restaurants/SearchForm';
import { useState } from 'react';
import { useEffect } from 'react';
import  img from '../assets/images/background.jpeg';
import { toSearchString } from '../utils/formatData';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(0),
  },
  mainContainer: {
    margin: 'auto',
    marginTop: theme.spacing(10),
    //width: '800px',
    marginBottom: theme.spacing(10),
  },
  headBackground: {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
}));

export default function Homepage(props) {
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(true);
  const history = useHistory();
  const API_BASE_URL = 'http://localhost:3030/api';

  const paramsFromURL = {
    city: props.match.params.city,
    cuisine: props.match.params.cuisine ? props.match.params.cuisine : props.match.params.city
  }
  //parameters city and cusisine comes either from the url or the search form
  const [filters, setFilters] = useState(paramsFromURL);


  useEffect(() => {
    setLoading(true);
    const { city, cuisine } = filters;
    const URL = `${API_BASE_URL}/restaurants/?city=${city}&cuisine=${cuisine}`;

    const city_param = city ? `/${city}` : '';
    const cuisine_param = cuisine ? `/${cuisine}` : '';
    
    //redirect path with filters
    if (city_param === cuisine_param) {
      // if we have only 1 given parameter
      history.push(`${city_param}`);
    }
    else history.push(`${city_param}${cuisine_param}`);

    fetch(URL)
      .then(response => response.json())
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
        if (data.length === 0) {
          setFound(false);
        }
        else {
          setFound(true);
        }
      })
      .catch(err => {
        throw new Error(err.message);
    });
    
  }, [filters, history])

 
  const handleChange = (key, value) => {
    // format the filter value for the api
    const formattedValue = toSearchString(value);
    setFilters({ ...filters, [key]: formattedValue });
  }

  const handleSearch = () => {
    // reset the url first
    history.push('/');
    // then update the parameters with the selected filters
    const { city, cuisine } = filters;
    const city_param = city ? `/${city}` : '';
    const cuisine_param = cuisine ? `/${cuisine}` : '';
    const filterPath = `${city_param}${cuisine_param}`;
    history.push(filterPath);
  }

  return (
    <React.Fragment>
      <main>
         <Paper className={classes.headBackground} >
          <Header title="Find your favorite restaurant" />
          <SearchForm filters={filters} handleChange={handleChange} handleSearch={handleSearch} />
        </Paper>
        <Container  className={classes.mainContainer}>
         {!found && <div style={{ textAlign: 'center' }}> <Typography component="h2" variant="h3" color="inherit" gutterBottom>
              Sorry, no match found !
          </Typography> </div>}
          {loading &&  <CircularProgress />}
          <Grid container spacing={8}>
            {restaurants.map((restaurant) => (
              <Restaurant key={restaurant.id} restaurant={restaurant} />
            ))}
          </Grid>
          </Container>
        </main>
      <Footer title="Ndeye@Upstack" description="Please find the code on github:" />
    </React.Fragment>
  );
}