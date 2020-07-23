import React from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Grid from '@material-ui/core/Grid';

export default () => (
  <>
 
    <TextField
      placeholder=" 스터디명"
      // variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  </>
);
