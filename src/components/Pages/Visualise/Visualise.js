import React, { Component } from "react";
import "./Visualise.css";
import { Grid } from "@mui/material";
import NavBar from "../../Helpers/NavBar/NavBar";

export class Visualise extends Component {
  render() {
    return (
      <Grid container>
        <NavBar />
        <h1>Visualise</h1>
      </Grid>
    );
  }
}

export default Visualise;
