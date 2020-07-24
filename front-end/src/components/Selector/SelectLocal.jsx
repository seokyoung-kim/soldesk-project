import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  fixedLabel:{
    width:100,
  }

}));

export default function SelectLocal() {
  const classes = useStyles();

  return (
    <div>
      <FormControl >
        <InputLabel htmlFor="grouped-native-select">지역</InputLabel>
        <Select className={classes.fixedLabel}  native defaultValue="" id="grouped-native-select">
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
