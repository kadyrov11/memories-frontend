import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

export const Input = ({ name, ...props }) => {
  const [field, { error, touched}] = useField(name);
  
  const configInput = {
    ...field,
    ...props,
    fullWidth: true,
    variant: "outlined",
  } 

  if( touched && error){
    configInput.error = true;
    configInput.helperText = error; 
  };

  return (
    <TextField { ...configInput } />
  )
};