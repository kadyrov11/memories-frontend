import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';

import { setPostsErr, setPostsLoading } from '../../redux/posts/actions'
import Post from '../../components/Post';
import Comments from '../../components/Comments';
import { commentPost, getPost } from '../../api';
import { getMe } from '../../redux/user/actions';

import useStyles from './styles';

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const [isAuth, setIsAuth] = useState(false)
  const { id } = useParams();
  const { user } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const fetchPost = async (id) => {
    dispatch(setPostsLoading(true));
    try {
      const { data } = await getPost(id);
      setPost(data);
    } catch (error) {
      dispatch(setPostsErr('Failed to get the Post!'));
      navigate(-1);
    } finally {
      dispatch(setPostsLoading(false));
    }
  }

  useEffect(() => {
    fetchPost(id);
  }, [id])
  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token && !user) dispatch(getMe());
    if(user) setIsAuth(true);
  }, [user, dispatch])

  const addComment = async (comment) => {
      try {
        const { data } = await commentPost(id, comment);
        return data
      } catch {
        dispatch(setPostsErr("Failed to leave comment!"))
      } finally {
        dispatch(setPostsLoading(false)) 
      }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} className={classes.leftSide} >
        <ArrowBack onClick={() => navigate(-1)} className={classes.goBack}/>
        {post && <Post _id={post?._id} {...post} noUpdate/>}
      </Grid>
      <Grid item xs={12} md={6} >
      {post && <Comments data={post?.comments} isAuth={isAuth} handleClick={addComment} />}
      </Grid>
    </Grid>
  )
};

export default SinglePost;