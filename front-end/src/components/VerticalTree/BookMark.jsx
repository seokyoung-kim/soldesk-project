import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MainPagination from '../CardList/MainPagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export default function BookMark() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
     <MainPagination/>
      
    </div>
  );
}