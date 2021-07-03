import React from "react";
import { Button, Grid, Typography, Popover } from "@material-ui/core";
import "./PopoverButton.css";

/* Taken directly from MaterialUI API. */
export default function PopoverButton({buttonDescription, popOverButtonText}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid item className="container">
      <Button
        color="primary"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        {buttonDescription}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography variant="body2" align="justify" className="popoverbutton_text">
          {popOverButtonText}
        </Typography>
      </Popover>
    </Grid>
  );
}
