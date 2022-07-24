import {
  Grid,
  TextField,
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop,
  Paper,
} from "@mui/material";
import React, { Component } from "react";
import "./SearchBar.css";
import UtilityButton from "../UtilityButton/UtilityButton";

export class SearchBar extends Component {
  state = {
    open: false,
  };

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ open: false });
  };

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
          <Grid item>
            <UtilityButton title="Download" />
          </Grid>
          <Grid item>
            <UtilityButton title="Random" />
          </Grid>
          {this.props.page === "Visualise" ? (
            <Grid item className="visualise_container">
              <UtilityButton title="Options" onClick={this.handleOpen} />
              <Modal
                className="modal"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade className="fade" in={this.state.open}>
                  <Paper elevation={0}>
                    <Box>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="transition-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Paper>
                </Fade>
              </Modal>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default SearchBar;
