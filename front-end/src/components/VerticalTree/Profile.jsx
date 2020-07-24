import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchSelect from '../Selector/SearchSelect';
import CustomizedButtons from '../Common/CustomizedButtons';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <SearchSelect/> {/* 검색창   */}
      <CustomizedButtons/>
      
    </div>
  );
}