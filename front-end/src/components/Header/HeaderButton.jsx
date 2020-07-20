import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Router, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function HeaderButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h1>Pro</h1>

    <Link to="/signin">
    <Button color="primary">
        {/* <Button color="secondary"> */}
      로그인
    </Button>
      </Link>
       
      <Link to="/signup">
      {/* <ColorButton variant="contained" color="primary" className={classes.margin}>
        회원가입
      </ColorButton> */}
      </Link>
      <Button>Default</Button>
      <Button>소개</Button>
      <Button>커뮤니티</Button>
      
     
    </div>
  );
}