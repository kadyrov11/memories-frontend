import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import useStyles from './styles';

const Comment = ({email, comment}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.commentWrapper} variant="outlined" >
        <Typography 
         className={classes.author}
         variant="body1"
         color="textPrimary"
         gutterBottom>
            <AccountCircle color="primary"/> {email}
        </Typography>
        <Typography variant="body2" color='textSecondary'>{comment}</Typography>
    </Paper>
  )
}

export default Comment;