import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
 


class MainPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
  }
 
  handleClick(offset) {
    this.setState({ offset });
  }
 
  render() {
    
    return (
      <MuiThemeProvider>
        <CssBaseline />
        <Grid container justify="center">
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          onClick={(e, offset) => this.handleClick(offset)}
        />
        </Grid>
      </MuiThemeProvider>
    );
  }
}
 
export default MainPagination;