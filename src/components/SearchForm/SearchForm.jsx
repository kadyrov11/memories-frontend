import React from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchForm = ({search, handleChange}) => {
  return (
    <Paper>
        <TextField
         fullWidth
         value={search}
         type="search"
         label="Search by title"
         variant="outlined"
         onChange={handleChange}
        />
    </Paper>

  )
}

export default SearchForm;