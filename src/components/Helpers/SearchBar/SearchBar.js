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
import Dropdown from "../../Helpers/Dropdown/Dropdown";

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
                open={this.state.open}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade className="fade" in={this.state.open}>
                  <Paper elevation={2}>
                    <Box>
                      <Typography variant="h5" className="title">
                        Options
                      </Typography>
                      <Grid item xs={12} className="relation_type_container">
                        <Typography className="relation_type_text">
                          Relation Type
                        </Typography>
                        <Dropdown
                          inputLabel={"Select a relation"}
                          value={""}
                          name={"relation_type"}
                          // onChange={}
                          listData={[
                            "Forward Associations",
                            "Backward Associations",
                          ]}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        className="visualisation_type_container"
                      >
                        <Typography className="visualisation_type_text">
                          Visualisation Type
                        </Typography>
                        <Dropdown
                          inputLabel={"Select a visualisation type"}
                          value={""}
                          name={"visualisation_type"}
                          // onChange={}
                          listData={["One-hop Network"]}
                        />
                      </Grid>
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
