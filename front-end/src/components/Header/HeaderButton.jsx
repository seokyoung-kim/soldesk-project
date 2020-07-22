import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import { Router, Link } from 'react-router-dom';



const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[800], // 숫자 바꿔주면 버튼 색상 바뀜 (윗줄 import 참조해서는 ) 
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display:"inline-block",


      
    },
  },
}));

export default function HeaderButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    <Link to="/"  style={{textDecoration:'none'}}>
    <h1>Pro</h1>
    </Link>

    <Button>소개</Button>
    <Button>커뮤니티</Button>

    <Link to="/signin"  style={{textDecoration:'none'}}>
    <Button>
        {/*  <Button color="primary"> <Button color="secondary"> */}
      로그인
    </Button>
      </Link>
       
      <Link to="/signup"  style={{textDecoration:'none'}}>
      <ColorButton variant="contained" color="primary" className={classes.margin} >
        회원가입
      </ColorButton>
      </Link>

      <Link to="/mypage"  style={{textDecoration:'none'}}>
      <Button>
        {/*  <Button color="primary"> <Button color="secondary"> */}
      마이페이지
    </Button>
      </Link>
    </div>
  );
}