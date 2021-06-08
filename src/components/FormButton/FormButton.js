import { Box, Button, Grid } from "@material-ui/core";
import React, { Component } from "react";

export class FormButton extends Component {
  render() {
    return (
      <Grid item>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            onClick={this.props.onClick}
            disabled={this.props.disabled}
            buttonRef={this.props.buttonRef}
          >
            {this.props.buttonDescription}
          </Button>
        </Box>
      </Grid>
    );
  }
}

export default FormButton;
