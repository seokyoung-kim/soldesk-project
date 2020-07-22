import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',//조절

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '125ch',
  },
}));

export default function InputOne() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <div>
        <TextField
          id="outlined-full-width"
          label="제목을 작성해주세요"
          style={{ margin: 8 }}
          // 평일 가능 스터디 모집!
          placeholder="ex) C언어 기초공사 스터디"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </div>
  );
}
