import React, { Component } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import NavBar from "../../Helpers/NavBar/NavBar";
import SearchBar from "../../Helpers/SearchBar/SearchBar";
import NetworkChart from "../../Helpers/NetworkChart/NetworkChart";
import ExpansionPanel from "../../Helpers/ExpansionPanel/ExpansionPanel";
import "./Visualise.css";

export class Visualise extends Component {
  render() {
    const panels = ["Legend 1", "Legend 2", "Legend 3"];
    return (
      <Grid container className="visualise_page_container">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} className="card_container">
          <Card elevation={2} className="card">
            <CardContent>
              <Grid item xs={12}>
                <SearchBar page="Visualise" />
              </Grid>
              <Grid item xs={12} className="description_container">
                <Typography variant="body1" className="description_text">
                  Visualization: <i>One-hop network </i>| Relation:{" "}
                  <i>Forward associations</i>
                </Typography>
              </Grid>
              <Grid item xs={12} className="visualisation_container">
                <NetworkChart />
              </Grid>
              {panels.map((title) => (
                <Grid item xs={12} className="expansion_panel_container">
                  <ExpansionPanel title={title} />
                </Grid>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default Visualise;
