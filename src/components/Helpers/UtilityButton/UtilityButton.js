import { Grid, IconButton, Tooltip } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { Component } from "react";
import "./UtilityButton.css";

/* For downloads, word randomisation, and options configuration. Used in SearchBar component*/
export class UtilityButton extends Component {
  render() {
    return (
      <Grid item className="util_btn_container">
        <Tooltip title={this.props.title}>
          <IconButton className="icon_btn">
            {this.props.title === "Download" ? (
              <DownloadIcon />
            ) : this.props.title === "Random" ? (
              <ShuffleIcon />
            ) : this.props.title === "Options" ? (
              <SettingsIcon />
            ) : null}
          </IconButton>
        </Tooltip>
      </Grid>
    );
  }
}

export default UtilityButton;
