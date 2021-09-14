import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    height: '200px'
  },
  cardDetails: {
    flex: 1,
    textAlign:'inherit'
  },
  cardMedia: {
    width: 180,
    borderRadius: '40%'
  },
  title: {
    paddingBottom: 10,
  }
});

export default function Restaurant(props) {
  const classes = useStyles();
  const { restaurant } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography className={classes.title} component="h2" variant="h5">
                {restaurant.name}
           </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <strong>Location: </strong>{restaurant.city}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                <strong>Serves cuisines : </strong>  {restaurant.cuisines.join()}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                {restaurant.telephone}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={restaurant.image} title={restaurant.name} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.object,
};