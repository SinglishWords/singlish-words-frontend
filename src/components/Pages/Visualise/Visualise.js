import React, { Component } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import NavBar from "../../Helpers/NavBar/NavBar";
import SearchBar from "../../Helpers/SearchBar/SearchBar";
import "./Visualise.css";

export class Explore extends Component {
  render() {
    return (
      <Grid container className="visualise_page_container">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} className="card_container">
          <Card elevation={3} className="card">
            <CardContent>
              <SearchBar />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default Explore;
