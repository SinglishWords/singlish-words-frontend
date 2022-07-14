import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <Grid container className="header">
        <Grid item className="header_text">
          <Typography variant="body2" className="text">
            {this.props.title}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
