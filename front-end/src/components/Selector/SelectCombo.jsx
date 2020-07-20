import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display:"inline-block",
  },
}));

export default function SelectCombo() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">지역</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="경기도">
            <option value={1}>의정부</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="전라남도">
            <option value={3}>전주</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">언어</InputLabel>
        <Select defaultValue="" id="grouped-select">
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
         
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
          <MenuItem value={5}>기타</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
