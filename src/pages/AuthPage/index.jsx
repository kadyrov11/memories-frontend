import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box } from '@material-ui/core'
import { AuthForm } from '../../components/AuthForm'

import { register, login, googleAuth } from '../../redux/user/actions'

const AuthPage = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(user || token) navigate('/posts');
  }, [user])

  const submitHandler = (user, isExist) => {
    if(typeof isExist === "boolean"){
      isExist ? dispatch(login(user)) : dispatch(register(user));
    }else{
      dispatch(googleAuth(user));
    }
  };

  return (
    <Box>
      <AuthForm submitHandler={submitHandler} />
    </Box>
  )
};

export default AuthPage;