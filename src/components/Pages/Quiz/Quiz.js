import { Grid, LinearProgress, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import appData from "../../../utils/appData";
// import { recaptchaState } from "../../../utils/state";
import {
  currentDateTime,
  endTimer,
  startTimer,
} from "../../../utils/Logic/timeUtil";
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
    // this.state = recaptchaState;
  }

  componentDidUpdate() {
    if (this.resetAssociations) {
      this.resetAssociations = false;
      /* Once user clicks the "Continue" button, reset all test fields and reset
    cursor back to the first association textfield */
      this.firstAssociationRef.current.value = "";
      this.secondAssociationRef.current.value = "";
      this.thirdAssociationRef.current.value = "";
      this.firstAssociationRef.current.focus();
      /* Reset pageStartTime reference position for every page */
      this.pageStartTime = startTimer();
      this.setState({ showRecaptcha: Math.random() < 0.1 });
    }
  }

  handleRecaptchaChange = () => {
    this.setState({ recaptchaAlreadyShown: true });
    this.setState({ isVerified: true });
  };

  render() {
    const {
      values,
      handleResponseChange,
      handleTimeOnPage,
      handleFieldChange,
      wordIndex,
      nextPage,
    } = this.props;
    const firstAssociationIndex = 0;
    const secondAssociationIndex = 1;
    const thirdAssociationIndex = 2;
    // const { isVerified, showRecaptcha, recaptchaAlreadyShown } = this.state;

    return (
      <Grid container className="container">
        <Grid container className="experiment_container">
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
              label={appData.quizPage.firstAssociationInstruction}
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
              label={appData.quizPage.secondAssociationInstruction}
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
              label={appData.quizPage.thirdAssociationInstruction}
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

          <Grid container className="progress_container">
            <Grid item xs={12}>
              <Typography
                className="progress_text"
                variant="caption"
                display="block"
                gutterBottom
              >
                {appData.quizPage.progress}
              </Typography>
              <LinearProgress
                className="progress"
                variant="determinate"
                value={(100 / values.data.length) * wordIndex}
              />
            </Grid>
          </Grid>

          {/* Recaptcha that randomly appears one time in quiz page .
          Show Recaptcha once at random if it has not been shown. */}
          {/* To change site key once actual site is up.
                Use smallworldofsinglishwords@gmail.com */}
          {/* To uncomment */}
          {/* {showRecaptcha && !recaptchaAlreadyShown ? (
            <Grid className="recaptcha" item xs={12}>
              <ReCAPTCHA
                
                sitekey="6Ldy0tQbAAAAANL-FvKgyzKBeWcGSaER4cd9jta0"
                onChange={this.handleRecaptchaChange}
              />
            </Grid>
          ) : null} */}

          {/* Continue Button */}
          {/* handleTimeOnPage tracks how long the user has been on the page*/}
          <Grid container className="button_container">
            <Grid item xs={6}>
              <PopoverButton
                buttonDescription={appData.quizPage.needHelpButtonDescription}
                popOverButtonText={appData.quizPage.instructionReminder}
                type="Quiz"
              />
            </Grid>
            <Grid item xs={6}>
              <FormButton
                buttonDescription={appData.quizPage.buttonDescription}
                onClick={(e) => {
                  this.resetAssociations = true;
                  this.pageEndTime = endTimer();
                  handleTimeOnPage(
                    wordIndex,
                    this.pageStartTime,
                    this.pageEndTime
                  );
                  handleFieldChange("endTime", currentDateTime());
                  nextPage(e);
                }}
                buttonRef={this.continueButton}
                // disabled={
                //   showRecaptcha && !recaptchaAlreadyShown ? !isVerified : false
                // } {/* To uncomment */}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Quiz;
