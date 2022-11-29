import React, { useState } from 'react';

import { Box, Button, Paper, TextField, Typography } from '@material-ui/core';

import Comment from '../Comment';

import useStyles from './styles';

const Comments = ({data, isAuth, handleClick}) => {
  const [commentsArr, setCommentsArr] = useState(data);
  const [newComment, setNewComment] = useState('');
  const classes = useStyles();

  const handleChange = (e) => setNewComment(e.target.value)

  const addComment = async (comm) => {
    if(comm.length){
      try {
        const data = await handleClick(comm);
        console.log(data)
        setCommentsArr([data, ...commentsArr]);
        setNewComment('')
      } catch{}
    }
  }

  const comments = commentsArr.map(comment => <Comment key={comment.comment} {...comment}/>)
  return (
    <Box>
      <Paper className={classes.inputWrapper}>
        { isAuth ?
          <>
            <TextField
            value={newComment}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            label='Leave comment'
            /> 
            <Button
              onClick={() => addComment(newComment)}
              className={classes.submitBtn}
              color="primary"
              variant='contained'
              fullWidth>
              Leave comment
            </Button>
          </> :
          <Typography variant='body1' color='textSecondary'>
            Please Sign in to leave comment
          </Typography>
        }
      </Paper>
      <Box className={classes.commentsWrapper}>
        {comments}
      </Box>
    </Box>
  )
}

export default Comments;