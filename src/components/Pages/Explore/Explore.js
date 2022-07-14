import React, { Component } from "react";
import { Grid } from "@mui/material";
import NavBar from "../../Helpers/NavBar/NavBar";
// import { TextField } from "@mui/material";
import "./Explore.css";

export class Explore extends Component {
  render() {
    return (
      <Grid container>
        <NavBar />
        <Grid container>
          <Grid item>
            <h1>Explore</h1>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Explore;
