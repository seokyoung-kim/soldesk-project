import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  

}));

export default function SelectCombo() {
  const classes = useStyles();

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="grouped-select"> 언어 </InputLabel>
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
    </div>
  );
}
