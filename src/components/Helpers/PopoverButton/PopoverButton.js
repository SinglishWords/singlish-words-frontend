import React, { Component } from "react";
import { Button, Grid, Typography, Popover } from "@mui/material";
import "./PopoverButton.css";

export class PopoverButton extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ anchorEl: null });
  };

  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
      <Grid item className="container">
        <Button
          className="popoverbutton"
          aria-describedby={id}
          variant="contained"
          onClick={this.handleClick}
        >
          {this.props.buttonDescription}
        </Button>
        <Popover
          id={id}
          className={this.props.type}
          open={open}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          disableAutoFocus={true}
        >
          <Typography
            variant="body2"
            align="justify"
            className={
              this.props.type === "introduction"
                ? "popoverbutton_text introduction_popover"
                : "popoverbutton_text quiz_popover"
            }
          >
            {this.props.popOverButtonText}
          </Typography>
        </Popover>
      </Grid>
    );
  }
}

export default PopoverButton;
