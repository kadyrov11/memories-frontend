import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { Form, Formik } from 'formik';
import { Paper, Avatar, Typography, Button, Box } from '@material-ui/core'
import { ArrowBack, LockOpenOutlined } from '@material-ui/icons'


import { Input } from '../Input';
import initialValues from './initial-values'
import { registerSchema, loginSchema } from '../../yup-schemas'
import { setAuthErr } from '../../redux/user/actions';

import useStyles from './styles';

export const AuthForm = ({submitHandler}) => {
  const [isExist, setIsExist] = useState(true)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clientId = process.env.REACT_APP_GOOGLE_ID;
  
  const classes = useStyles();  

  useEffect(() => {  
    const initClient = () => {
      gapi.client.init({
      clientId,
      scope: 'email'
    });
    };
    gapi.load('client:auth2', initClient);
  }, [])
  
  const toggleExist = () => {
    setIsExist(prev => !prev)
  }

  const handleSubmit =  (values) => {
    submitHandler(values, isExist);
  };

  const googleSuccess = (res) => {
    const googleUser = res?.profileObj;
    submitHandler(googleUser);
  }

  const googleFailure = (err) => {
    dispatch(setAuthErr("Failed to sign in with Google!"));
    console.log("Failed to sign in with Google!");
    console.error(err.details || err);
  }

  return (
        <Paper className={classes.formContainer} >
        <ArrowBack onClick={() => navigate(-1)} className={classes.goBack}/>
          <Box>
            <Avatar className={classes.avatar} >
              <LockOpenOutlined/>
            </Avatar>
            <Typography variant="h5" >
              {isExist ? "Log In" : "Sign up"}
            </Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={ isExist ? 
              loginSchema : registerSchema
            }
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form className={classes.form}>
              { !isExist && (
                  <>
                    <Input name="name" label="Name" />
                    <Input name="lastName" label="Last Name"  />
                  </> 
              )}
              <Input name="email" label="E-mail" />
              <Input name="password" label="Password" type="password" />
              { !isExist && <Input name="confirmPass" label="Confirm Password" type="password" /> }
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                className={classes.submit}
              >
                Submit
              </Button>
              <Box className={classes.btnWrapper}>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
                <Button
                  variant="text"
                  color="default"
                  onClick={toggleExist}
                >
                  { isExist ? "Create an account" : "I have an account"}
                </Button>
              </Box>
            </Form>
          </Formik>
        </Paper>
  )
}
