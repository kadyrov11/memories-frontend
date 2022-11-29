import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import { ThumbUpAlt, ThumbUpAltOutlined, Delete, Edit, UnfoldMore } from '@material-ui/icons';
import moment from 'moment'

import useStyles from './styles.js';

import { deletePost, likePost } from '../../redux/posts/actions';

const Post = ({ setCurrentId, _id, noUpdate, ...post }) => {
  const { user } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const classes = useStyles()
  
  const handledTags = post.tags.map(tag => `#${tag} `)

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.imageUrl} title={post.title}/>
      <div className={classes.overlay} >
        <Typography variant="h6" >{post.creator}</Typography>
        <Typography variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
      </div>
      { !noUpdate && user?.email === post.creator &&
        <div className={classes.overlay2} >
        <Button title="Edit"  size="small" onClick={() => setCurrentId(_id)} >
          <a href="#form" style={{color: 'white'}}><Edit fontSize="medium" /></a> 
        </Button>
      </div>}
      <div className={classes.details} >
        <Typography variant="body2" color="textSecondary" >{handledTags}</Typography>
      </div>
      <CardContent className={classes.content}>
        <Link to={`/posts/${_id}`} title="Post page" >
          <Typography className={classes.title} variant="body2" color="textPrimary">{post.title}<UnfoldMore/></Typography>   
        </Link>
        <Typography variant="body2" color="textSecondary" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions} >
        {user ?
          <Button size="small" color="primary" onClick={() => dispatch(likePost(_id))} >
          { post.likes.includes(user?._id) ?
            <ThumbUpAlt fontSize="small" /> : <ThumbUpAltOutlined fontSize="small" /> 
          }
          <span className={classes.likeIcon}>{post.likes.length}</span>
        </Button> :
        <Grid container alignItems='center'>
          <ThumbUpAltOutlined fontSize="small" style={{fill: '#ccc'}} /> <span className={classes.likeIcon} style={{color: '#ccc'}}>{post.likes.length}</span>
        </Grid>
        }
        { user?.email === post.creator &&
          <Button size="small" color="secondary" onClick={() => {
              dispatch(deletePost(_id))
              if(noUpdate) navigate(-1);
            }
          } >
          <Delete fontSize="small" color="secondary" />
          Delete
          </Button>
        }
      </CardActions>
    </Card>
  )
}

export default Post;