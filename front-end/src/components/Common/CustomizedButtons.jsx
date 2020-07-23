import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

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
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
      
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    width:'30ch',
    margin: theme.spacing(1),
  },
  small:{
    width:'10ch',
    margin: theme.spacing(1),
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      {/* 모집완료/삭제 => yes/no 창띄우기*/}
      <ColorButton variant="contained" color="primary" className={classes.margin} onClick={() => { alert('스터디 모집을 완료하시겠습니까?') }}>
        모집완료
      </ColorButton>

      <ColorButton variant="contained" color="primary" fullWidth>
        글쓰기
      </ColorButton>

      <ColorButton variant="contained" color="primary" className={classes.small}>
        수정
      </ColorButton>
      
      <ColorButton variant="contained" color="primary" className={classes.small}>
        삭제
      </ColorButton>
    </div>
  );
}
