import React, { Component } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import NavBar from "../../Helpers/NavBar/NavBar";
import ExpansionPanel from "../../Helpers/ExpansionPanel/ExpansionPanel";
import SearchBar from "../../Helpers/SearchBar/SearchBar";
import "./Explore.css";

export class Explore extends Component {
  render() {
    return (
      <Grid container className="explore_page_container">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} className="card_container">
          <Card elevation={3} className="card">
            <CardContent>
              <SearchBar />
              <Grid item xs={12} className="expansion_panel_container">
                <ExpansionPanel title="Forward Associations" />
              </Grid>
              <Grid item xs={12} className="expansion_panel_container">
                <ExpansionPanel title="Backward Associations" />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default Explore;
