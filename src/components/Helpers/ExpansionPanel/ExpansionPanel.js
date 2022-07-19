import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Box,
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    );
  }
}

export default ExpansionPanel;
