import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "@fontsource/aladin"

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    height: '100%',
    //backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    //marginBottom: theme.spacing(4),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  headerContent: {
    position: 'relative',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    fontFamily: 'Aladin',
    textShadow: '#be4d2b 1px 1px 1px'
  }
}));



export default function Header(props) {
  const classes = useStyles();
  const { title } = props;
 
  return (
      <div className={classes.header}>
      <Grid container>
        <Grid item md={12}>
          <div className={classes.headerContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
          </div>
        </Grid>
      </Grid>
      </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};