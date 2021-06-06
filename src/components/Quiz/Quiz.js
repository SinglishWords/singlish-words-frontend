import { Grid, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import FormButton from "../FormButton/FormButton";
import "./Quiz.css";

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.firstAssociationRef = React.createRef();
    this.secondAssociationRef = React.createRef();
    this.thirdAssociationRef = React.createRef();
    this.continueButton = React.createRef();
    this.startTime = performance.now();
  }

  continue = (e) => {
    e.preventDefault();
    /* Once user clicks the "Continue" button, reset all test fields and reset
    cursor back to the first association textfield */
    this.firstAssociationRef.current.value = "";
    this.secondAssociationRef.current.value = "";
    this.thirdAssociationRef.current.value = "";
    this.firstAssociationRef.current.focus();
    /* Reset startTime position for every page */
    this.startTime = performance.now();
    this.props.nextStep();
  };

  render() {
    const { values, handleResponseChange, handleTimeOnPage, wordIndex } = this.props;
    const firstAssociationIndex = 0;
    const secondAssociationIndex = 1;
    const thirdAssociationIndex = 2;

    return (
      <Grid container className="container">
        <Grid container className="experimentContainer">
          {/* Word on Page*/}
          <Grid item xs={12}>
            <Typography variant="body2" className="word">
              {values.data[wordIndex].question.word}
            </Typography>
          </Grid>

          {/* First Association */}
          <Grid item xs={12} className="textField">
            <TextField
              autoFocus
              autoComplete="off"
              label="Enter a first association"
              name="firstAssociationText"
              onChange={(e) =>
                handleResponseChange(e, wordIndex, firstAssociationIndex)
              }
              inputRef={this.firstAssociationRef}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  this.secondAssociationRef.current.focus();
                }
              }}
            />
            <br />
            <br />
            <br />

            {/* Second Association */}
            <TextField
              autoComplete="off"
              label="Enter a second association"
              name="secondAssociationText"
              onChange={(e) =>
                handleResponseChange(e, wordIndex, secondAssociationIndex)
              }
              inputRef={this.secondAssociationRef}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  this.thirdAssociationRef.current.focus();
                }
              }}
            />
            <br />
            <br />
            <br />

            {/* Third Association */}
            <TextField
              autoComplete="off"
              label="Enter a third association"
              name="thirdAssociationText"
              onChange={(e) =>
                handleResponseChange(e, wordIndex, thirdAssociationIndex)
              }
              inputRef={this.thirdAssociationRef}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  this.continueButton.current.click();
                }
              }}
            />
            <br />
            <br />
            <br />
          </Grid>

          {/* Continue Button */}
          {/* handleTimeOnPage tracks how long the user has been on the page*/}
          <FormButton
            buttonDescription="continue"
            onClick={(e) => {
              var endTime = performance.now()
              handleTimeOnPage(e, wordIndex, this.startTime, endTime)
              this.continue(e);
            }}
            buttonRef={this.continueButton}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Quiz;
