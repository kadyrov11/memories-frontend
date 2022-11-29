import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import Profile from '../../components/Profile';
import { getMe, logout } from '../../redux/user/actions'


const ProfilePage = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token) navigate('/auth');
    if(!user && token) dispatch(getMe());
  }, [])
  
  const onLogout = () => {
    dispatch(logout());
    navigate('/posts');
  };

  return (
    <Grid container alignItems='center' justifyContent='center'>
      <Profile user={user} onLogout={onLogout} />
    </Grid>
  )
};

export default ProfilePage;