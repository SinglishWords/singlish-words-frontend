import React from "react";
import {Grid, Typography, Popover} from "@material-ui/core";
import FormButton from "../FormButton/FormButton";
import "./PopoverButton.css";
import formData from "../../utils/formData";

/* Taken directly from MaterialUI API.
To look into whether it is possible to change it to a class-based component*/
export default function PopoverButton() {
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
    <Grid item>
      <FormButton aria-describedby={id} onClick={handleClick} buttonDescription="Need help?"/>
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
        <Typography variant="body2" className="popoverbutton_text">
          {formData.quizPage.instructionReminder}
        </Typography>
      </Popover>
    </Grid>
  );
}
