import { Box, Button, Grid } from "@mui/material";
import React, { Component } from "react";
import "./FormButton.css";

export class FormButton extends Component {
  render() {
    return (
      <Grid item>
        <Box display="flex" justifyContent="center" className="box">
          <Button
            type="submit"
            variant="contained"
            onClick={this.props.onClick}
            disabled={this.props.disabled}
            ref={this.props.buttonRef}
            size={this.props.size}
            className="formButton"
          >
            {this.props.buttonDescription}
          </Button>
        </Box>
      </Grid>
    );
  }
}

export default FormButton;
