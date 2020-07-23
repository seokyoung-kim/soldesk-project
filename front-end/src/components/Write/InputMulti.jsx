import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70ch', //넓이 조절
      
    },
  },
}));

export default function InputMulti() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
    
      <div>
        <h3>자세한 내용을 작성해주세요</h3>
       
        <TextField
          id="outlined-multiline-static"
          label="장소 및 시간 등 자세한 내용을 작성해주세요"
          
          multiline //스크롤 유무 차이
          rows={15} // 높이 조절
          defaultValue="ex) 종각역 7시 평일 월화 스터디원 모집합니다! "
          variant="outlined"
        />
      </div>
    </form>
  );
}
