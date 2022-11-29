import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/posts');
  }, [])
  
  return <></> ;
}

export default Redirect;