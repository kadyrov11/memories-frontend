import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Paper } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';

import useStyles from './styles';

const CustomPagination = ({page, pageCount, search}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.pagWrapper}>
      <Pagination
      className={classes.pagination}
      variant="outlined" 
      color="primary"
      siblingCount={0}
      page={page}
      count={pageCount}
      renderItem={(item) => (
          <PaginationItem
          component={Link}
          to={search ? `/posts?page=${item.page}&search=${search}` : `/posts?page=${item.page}`}
          {...item}
          />)}
      />
    </Paper>
  )
}

export default CustomPagination;