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
    minWidth: 50,
    display:"inline-block",
  },
}));

export default function SelectCombo() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">언어</InputLabel>
        <Select defaultValue="" id="grouped-select">
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
         
          <MenuItem value={1}>C</MenuItem>
          <MenuItem value={2}>C#</MenuItem>
          <MenuItem value={3}>C++</MenuItem>
          <MenuItem value={4}>JAVA</MenuItem>
          <MenuItem value={5}>JS</MenuItem>
          <MenuItem value={6}>SQL</MenuItem>
          <MenuItem value={7}>기타</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">지역</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="서울">
            <option value={1}>서울</option>
          </optgroup>
          <optgroup label="경기도">
            <option value={2}>수원시</option>
            <option value={3}>성남시</option>
            <option value={4}>의정부시</option>
            <option value={5}>안양시</option>
            <option value={6}>부천시</option>
            <option value={7}>광명시</option>
            <option value={8}>평택시</option>
            <option value={9}>동두천시</option>


          </optgroup>
        </Select>
      </FormControl>
      
    </div>
  );
}
