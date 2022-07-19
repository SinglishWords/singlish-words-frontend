import React, { Component } from "react";
import { Card, CardContent, Grid, TextField, IconButton } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import DownloadIcon from "@mui/icons-material/Download";
import NavBar from "../../Helpers/NavBar/NavBar";
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
              <Grid item xs={12} className="inputs_container">
                <Grid item xs={6}>
                  <TextField label="Search" variant="outlined" />
                </Grid>
                <Grid item xs={6} className="btn_container">
                  <IconButton className="download_btn">
                    <DownloadIcon />
                  </IconButton>
                  <IconButton className="shuffle_btn">
                    <ShuffleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default Explore;
