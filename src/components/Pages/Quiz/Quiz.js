import { Grid, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import formData from "../../../utils/formData";
import {
  currentDateTime,
  endTimer,
  startTimer,
} from "../../../utils/Logic/timeutil";
import FormButton from "../../Helpers/FormButton/FormButton";
import PopoverButton from "../../Helpers/PopoverButton/PopoverButton";
import "./Quiz.css";

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.firstAssociationRef = React.createRef();
    this.secondAssociationRef = React.createRef();
    this.thirdAssociationRef = React.createRef();
    this.continueButton = React.createRef();
    this.pageStartTime = startTimer();
    this.pageEndTime = "";
    this.resetAssociations = false;
  }

  /* Only reset associations when user clicks continue */
  shouldComponentUpdate() {
    return this.resetAssociations;
  }

  componentDidUpdate() {
    this.resetAssociations = false;
    /* Once user clicks the "Continue" button, reset all test fields and reset
    cursor back to the first association textfield */
    this.firstAssociationRef.current.value = "";
    this.secondAssociationRef.current.value = "";
    this.thirdAssociationRef.current.value = "";
    this.firstAssociationRef.current.focus();
    /* Reset pageStartTime reference position for every page */
    this.pageStartTime = startTimer();
  }

  render() {
    const {
      values,
      handleResponseChange,
      handleTimeOnPage,
      handleTimeOnForm,
      wordIndex,
      nextPage,
    } = this.props;
    const firstAssociationIndex = 0;
    const secondAssociationIndex = 1;
    const thirdAssociationIndex = 2;

    return (
      <Grid container className="container">
        <Grid container className="experimentContainer">
          {/* Word on Page*/}
          <Grid item xs={12}>
            <Typography variant="body2" className="word">
              {values.data[wordIndex].question.id + ". " + values.data[wordIndex].question.word}
            </Typography>
          </Grid>
          {/* First Association */}
          <Grid item xs={12} className="textField">
            <TextField
              autoFocus
              autoComplete="off"
              label={formData.quizPage.firstAssociationInstruction}
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
              defaultValue={
                values.data[wordIndex].response[firstAssociationIndex]
              }
            />

            {/* Second Association */}
            <TextField
              autoComplete="off"
              label={formData.quizPage.secondAssociationInstruction}
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
              defaultValue={
                values.data[wordIndex].response[secondAssociationIndex]
              }
            />

            {/* Third Association */}
            <TextField
              autoComplete="off"
              label={formData.quizPage.thirdAssociationInstruction}
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
              defaultValue={
                values.data[wordIndex].response[thirdAssociationIndex]
              }
            />
          </Grid>

          {/* Continue Button */}
          {/* handleTimeOnPage tracks how long the user has been on the page*/}
          <Grid container className="button_container">
            <Grid item xs={6}>
              <PopoverButton
                buttonDescription={formData.quizPage.needHelpButtonDescription}
                popOverButtonText={formData.quizPage.instructionReminder}
              />
            </Grid>
            <Grid item xs={6}>
              <FormButton
                buttonDescription={formData.quizPage.buttonDescription}
                onClick={(e) => {
                  this.resetAssociations = true;
                  this.pageEndTime = endTimer();
                  handleTimeOnPage(
                    wordIndex,
                    this.pageStartTime,
                    this.pageEndTime
                  );
                  handleTimeOnForm("endTime", currentDateTime());
                  nextPage(e);
                }}
                buttonRef={this.continueButton}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Quiz;
