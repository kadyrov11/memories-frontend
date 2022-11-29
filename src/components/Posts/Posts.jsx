import React from 'react'
import { useSelector } from 'react-redux';
import { Grid, Paper, Typography } from '@material-ui/core';

import Post from '../Post';

import useStyles from './styles.js';


const Posts = ({ setCurrentId }) => {
  const { posts } = useSelector(state => state.posts);
  const classes = useStyles();

  const postItems = posts.map(post => (
    <Grid item key={post._id} xs={12} sm={6} >
      <Post {...post} setCurrentId={setCurrentId} />
    </Grid>
  ))
  
  return (
    !posts.length ? <Paper style={{padding: '15px'}}>
      <Typography variant='h5'>There are no posts yet</Typography>
    </Paper> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={2}> 
          {postItems}
      </Grid>
    )
  )
}

export default Posts