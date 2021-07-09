import React from "react";
import { Button, Grid, Typography, Popover } from "@material-ui/core";
import "./PopoverButton.css";

/* Taken directly from MaterialUI API. */
export default function PopoverButton({
  buttonDescription,
  popOverButtonText,
  type,
}) {
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
        className={type}
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
        disableAutoFocus={true}
      >
        <Typography
          variant="body2"
          align="justify"
          className={
            type === "introduction"
              ? "popoverbutton_text introduction_popover"
              : "popoverbutton_text quiz_popover"
          }
        >
          {popOverButtonText}
        </Typography>
      </Popover>
    </Grid>
  );
}
