import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import React, { Component } from "react";
import "./ExpansionPanel.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export class ExpansionPanel extends Component {
  render() {
    return (
      <Grid item className="panel_container">
        <Accordion defaultExpanded={true} elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>
              <b>{this.props.title}</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consequat a lacus euismod vulputate. Quisque ut blandit lacus.
              Donec posuere odio ut consequat vestibulum. Nullam ligula diam,
              porttitor porta iaculis non, gravida sed leo. Suspendisse at nulla
              ultricies, viverra est posuere, finibus mauris. Integer tincidunt
              arcu eu mi malesuada condimentum. Donec eget venenatis nulla.
              Integer bibendum dictum lectus, a ultrices lorem ullamcorper non.
              Quisque vitae leo sit amet enim tristique mattis sed luctus est.
              Aliquam eget feugiat nisl, eu porta magna.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    );
  }
}

export default ExpansionPanel;
