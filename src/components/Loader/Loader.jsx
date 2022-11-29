import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@material-ui/core';


const Loader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { auth, posts } = useSelector(state => state); 

  useEffect(() => {
    setIsLoading(auth.loading || posts.loading);
  }, [auth.loading, posts.loading])

  return (
    <Backdrop
     style={{zIndex: 2000}}
     open={isLoading}
    >
      <CircularProgress/>
    </Backdrop>
  )
}

export default Loader;