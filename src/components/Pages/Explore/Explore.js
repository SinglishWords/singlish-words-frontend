import React, { Component } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import NavBar from "../../Helpers/NavBar/NavBar";
import ExpansionPanel from "../../Helpers/ExpansionPanel/ExpansionPanel";
import SearchBar from "../../Helpers/SearchBar/SearchBar";
import "./Explore.css";

export class Explore extends Component {
  render() {
    const panels = ["Forward Associations", "Backward Associations"];
    return (
      <Grid container className="explore_page_container">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} className="card_container">
          <Card elevation={2} className="card">
            <CardContent>
              <SearchBar page="Explore" />
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

export default Explore;
