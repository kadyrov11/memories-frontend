import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grow, Grid, Paper, Typography, debounce } from '@material-ui/core';

import Form from '../../components/Form';
import Posts from '../../components/Posts';
import Pagination from '../../components/Pagination/Pagination';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getMe } from '../../redux/user/actions';
import { getPosts, createPost, updatePost } from '../../redux/posts/actions'

import useStyles from './styles.js';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const search = searchParams.get('search') || '';
  
  const [page, setPage] = useState('1');
  const [post, setPost] = useState(null);
  const [isAuth, setIsAuth] = useState(false)
  const [currentId, setCurrentId] = useState(null);

  const { posts, pageCount } = useSelector(state => state.posts);
  const { user } = useSelector(state => state.auth);

  const classes = useStyles();
  const dispatch = useDispatch();

  
  const onSearchChange = (e) => {
    setSearchParams({search: e.target.value});
  } 
  

  
// Check Auth & GetMe
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if(token && !user) dispatch(getMe());
    if(user) setIsAuth(true);
  },[user]);
  
// Get searched posts
  useEffect(() => {
    if(search){
      const debouncedFetch = debounce(page === '1' ? () => dispatch(getPosts({page, search})) : () => setPage(1), 1000);
  
      debouncedFetch();
    }
  },[search]);
// Get page params
  useEffect(() => {
    if(currentPage) setPage(currentPage);
  },[currentPage]);
// GetPosts
  useEffect(() => {
    if(!search) dispatch(getPosts({page, search}));
  },[page, search]);
// Get updating post
  useEffect(() => {
    if(currentId){
      const updatingPost = posts.find(post => post._id === currentId)
      setPost(updatingPost)
    }
  }, [currentId]);

  const submitHandler = async (postData) => {  
    let tagsArr = [];

    if(Array.isArray(postData.tags)){
      tagsArr = postData.tags
    }else{
      tagsArr = postData.tags.split(',')
    }
    const data = { ...postData, tags:  tagsArr};

    if (currentId){
      dispatch(updatePost({ _id: currentId, ...data }));
      setCurrentId(null)
      setPost(null)
    }else{
      await dispatch(createPost(data));
    }
    if(page === '1') {
      dispatch(getPosts({page, search}));
    }
  } 
  
  const reset = () => {
    setCurrentId(null)
    setPost(null)
  }

  return (
    <Grow in>
      <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3} >
        <Grid item xs={12} md={4}>
          <SearchForm search={search} handleChange={onSearchChange} />
          { isAuth ? 
            <Form post={post} submitHandler={submitHandler} reset={reset} /> :
            <Paper className={classes.signInWarning} >
              <Typography variant='body1' color='inherit'>
                Sign in to create own memory
              </Typography>
            </Paper>
          }
        </Grid>
        <Grid  item xs={12} md={8} >
          <Posts setCurrentId={setCurrentId} />
          { pageCount > 1 &&
            <Pagination page={Number(page)} pageCount={pageCount}/>
          }
        </Grid>
      </Grid>
    </Grow>
  )
}

export default Home;