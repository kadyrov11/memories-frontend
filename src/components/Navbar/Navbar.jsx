import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Grid, Avatar, Button } from '@material-ui/core';

import useStyles from './styles.js';

const Navbar = () => {
  const { user } = useSelector(state => state.auth);

  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position="static" color="inherit" >
        <Grid container justifyContent="space-between" alignItems="center" >
          <Link to="/posts" title='Home Page'>
            <Grid item className={classes.logoWrapper} >  
              <img className={classes.image} src="https://i.ibb.co/NyJqJWK/memories-Logo.png" alt="memories" />
              <Typography className={classes.heading} variant="h2" align="center" >Memories</Typography>
            </Grid>
          </Link>
          <Grid item >
            { user ?
              <Link to="/profile" className={classes.user} title="Profile" >
                <Typography variant='body1' className={classes.fullName} >
                  {`${user.name} ${user.lastName}`}
                </Typography>
                <Avatar className={classes.avatar}>{user.name.charAt(0)}</Avatar>
              </Link> : 
              <Link to="/auth">
                <Button variant="contained" color="primary">
                  sign in
                </Button>
              </Link>
            }
          </Grid>
        </Grid>
    </AppBar>
  )
}

export default Navbar