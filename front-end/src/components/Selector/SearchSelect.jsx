import React from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default () => (
  <>
    

    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
    <TextField
      variant="outlined"
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
