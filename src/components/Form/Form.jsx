import React, { useEffect, useState } from 'react'
import { Button, Typography, Paper, TextField } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles.js';

const initialState = {
  title: '',
  message: '',
  tags: '',
  imageUrl: null
}
const MemoryForm = ({ post, submitHandler, reset }) => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    if(post){
      setFormData(post)
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.selectedFile  === null ){
      setError(true);
    }else{
      setError(false);
    };

    if (!error){
     submitHandler(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Paper className={classes.formContainer}>
      <Typography variant="h6" style={{marginBottom: '20px'}} >{post ? 'Update Memory' : 'Create a Memory'}</Typography>
        <form 
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={ e => {
          handleSubmit(e)
          setFormData(initialState)
          reset()
        }}
        id="form"
        >
          <TextField 
          name="title" 
          value={formData.title}
          onChange={handleChange} 
          label="Title" 
          fullWidth
          required
          variant="outlined"
          />
          <TextField 
          name="message" 
          value={formData.message}
          onChange={handleChange} 
          label="Description" 
          fullWidth
          required
          variant="outlined"
          />
          <TextField 
          name="tags" 
          value={formData.tags}
          onChange={handleChange} 
          label="Tags" 
          fullWidth
          variant="outlined"
          helperText='Separate tags with commas (" example,newTag ")'
          />
          <div className={classes.fileInput}>
            <FileBase 
              type="file"
              name="selectedFile"
              multiple={false}
              onDone={({base64}) => setFormData( prev => ({ ...prev, imageUrl: base64 }))}
            />
          </div>
          {
            error && 
             <Typography variant="h6" color="error" >Image is required</Typography>
          }
          <Button 
            className={classes.buttonSubmit} 
            variant="contained" 
            color="primary" 
            size="large" 
            type="submit"
            fullWidth >
              Submit
          </Button>
          <Button 
            className={classes.buttonSubmit} 
            variant="contained" 
            color="secondary" 
            size="small" 
            type="button"
            onClick={() => {
              setFormData(initialState)
              reset(null)
            }}
            fullWidth >
              Reset
          </Button>
        </form>
    </Paper>
  )
}

export default MemoryForm;
