import { Grid, TextField, IconButton, Tooltip } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import DownloadIcon from "@mui/icons-material/Download";
import React, { Component } from "react";
import "./SearchBar.css";

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
          <Tooltip title="Download">
            <IconButton className="download_btn">
              <DownloadIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Shuffle">
            <IconButton className="shuffle_btn">
              <ShuffleIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    );
  }
}

export default SearchBar;
