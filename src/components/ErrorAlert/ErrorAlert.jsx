import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const ErrorAlert = () => {
  const [showErr, setShowErr] = useState(false);
  const { auth, posts } = useSelector(state => state);
  const errMessage = auth.error || posts.error;

  useEffect(() => {
    if(errMessage) setShowErr(true);
  }, [errMessage])

  const errStyles = {
    position: 'absolute',
    bottom: 0,
    zIndex: 2000,
    margin: '15px'
  }

  return (
    <Snackbar 
     open={showErr}
     autoHideDuration={4000} 
     onClose={() => setShowErr(false)}
     style={errStyles}
    >
        <Alert severity="error">
          {errMessage}
        </Alert>
      </Snackbar>
  )
}

export default ErrorAlert;