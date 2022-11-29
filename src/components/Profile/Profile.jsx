import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import { Paper, Avatar, Typography, Button, Box } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'


import useStyles from './styles'

const Profile = ({user, onLogout}) => {
  const classes = useStyles();
  
  const clientId = process.env.REACT_APP_GOOGLE_ID  

  return (
    <Paper className={classes.profile}>
        <Link to="/posts">
            <ArrowBack className={classes.goBack}/>
        </Link>
        <Avatar className={classes.avatar} >{user?.name.charAt(0)}</Avatar>
        <Box className={classes.userInfo}>
            <Typography variant='h4'>{user?.name} {user?.lastName}</Typography>
            <Typography variant='body1'>{user?.email}</Typography>
        </Box>
        <GoogleLogout
            clientId={clientId}
            render={(props) => (
                <Button 
                 variant="contained" 
                 color="secondary"
                 onClick={() => {
                    props.onClick();
                    onLogout();
                 }}
                >
                    Log out
                </Button>
            )}
            onLogoutSuccess={() => console.log('Google successfully logout.')}
        />
    </Paper>
  )
}

export default Profile;