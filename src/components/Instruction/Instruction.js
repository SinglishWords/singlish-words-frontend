import { Button, Divider, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import FormButton from "../FormButton/FormButton";
import Header from "../Header/Header";
import "./Instruction.css";

export class Instruction extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <Grid container>
        {/* Header */}
        <Header title={"Instructions"} />

        <Grid container className="instructionContainer" justify="center">
          <Divider />
          <Grid container justify="center">
            {/* Content How it works...*/}
            <Grid item xs={12}>
              <Typography variant="h4" className="title">
                How it works...
              </Typography>
            </Grid>

            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                On the top of the screen a word will appear.{" "}
                <b>Enter the first word that comes to mind</b> when reading this
                word. If you don't know this word, press{"   "}
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="button"
                >
                  Unknown word
                </Button>
                .
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                Press <em>Enter</em> to add a second and third word or press
                {"   "}
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="button"
                >
                  No more responses
                </Button>{" "}
                if you can't think of any.
              </Typography>
            </Grid>

            {/* Content Some hints...*/}
            <Grid item xs={12}>
              <Typography variant="h4" className="title">
                Some hints
              </Typography>
            </Grid>

            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                Only give associations to the word on top of the screen (not to
                your previous responses!)
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                Try to avoid full sentences as responses.
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                Simply type a word and press <em>Enter</em> to go to the next
                one.
              </Typography>
            </Grid>
          </Grid>

          {/* Continue Button*/}
          <FormButton buttonDescription="continue" onClick={this.continue} />
        </Grid>
      </Grid>
    );
  }
}

export default Instruction;
