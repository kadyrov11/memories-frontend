import React from 'react'
import { Container } from '@material-ui/core';

import Router from './navigation';

import Navbar from './components/Navbar';
import Loader from './components/Loader';
import ErrorAlert from './components/ErrorAlert/ErrorAlert';

const App = () => {

  return (
    <Container maxWidth="lg" >
      <Navbar/>
      <Router/>
      <Loader/>
      <ErrorAlert/>
    </Container>
  )
}

export default App
