import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  textField: {
    width: '170',
  },
  writeText:{
    fontWeight: "bold"
  }
}));

export default function InputOne() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
        fullWidth
          id="outlined-full-width"
          // label="제목을 작성해주세요"
          style={{ margin: 8 }}
          // 평일 가능 스터디 모집!
          placeholder="ex) C언어 기초공사 스터디"
          // helperText="Full width!" 필수사항이라며 띄울수 있을 듯
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
