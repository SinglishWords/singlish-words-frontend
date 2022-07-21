import { Grid, TextField } from "@mui/material";
import React, { Component } from "react";
import "./SearchBar.css";
import UtilityButton from "../UtilityButton/UtilityButton";

export class SearchBar extends Component {
  render() {
    return (
      <Grid item xs={12} className="search_bar">
        <Grid item xs={6}>
          <TextField
            label="Search"
            variant="outlined"
            className="search_textfield"
          />
        </Grid>
        <Grid item xs={6} className="btn_container">
          <UtilityButton title="Download" />
          <UtilityButton title="Random" />
          {this.props.page === "Visualise" ? (
            <UtilityButton title="Options" />
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default SearchBar;
