import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Router, Link } from 'react-router-dom';
import HeaderButton from '../components/Header/HeaderButton';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  
  
 
}));


export default function SignUpButtons() {
  const classes = useStyles();

  return (
    <div>
      <HeaderButton/>
    </div>
  );
}
