import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  fixedLabel:{
    minWidth:100, 
    // 단순 width로도 조정 가능함 
  },
  formControl: {
    minWidth: 100,
  },
  
}));


export default function SelectLang() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">언어</InputLabel>
        <Select className={classes.fixedLabel}  defaultValue="" id="grouped-select">
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={1}>C</MenuItem>
          <MenuItem value={2}>C#</MenuItem>
          <MenuItem value={3}>C++</MenuItem>
          <MenuItem value={4}>JAVA</MenuItem>
          <MenuItem value={5}>JavaScript</MenuItem>
          <MenuItem value={6}>SQL</MenuItem>
          <MenuItem value={7}>기타</MenuItem>
        </Select>
      </FormControl>
{/* 
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          name="age"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl> */}
    </div>
  );
}
