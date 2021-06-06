import React, { Component } from "react";
import formFields from "../utils/formFields";
import Instruction from "./Instruction/Instruction";
import Introduction from "./Introduction/Introduction";
import Quiz from "./Quiz/Quiz";
import UserDetails from "./UserDetails/UserDetails";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = formFields;
  }

  /* Go back to previous step */
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  /* Proceed to next step */
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  /* Handle primitive field change */
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /* Handle array field change (ie Language field)
  Can be extended to handle general array changes by passing in state field as parameter */
  handleLanguageChange = (e) => {
    let temp = { ...this.state };
    const { options } = e.target;
    const value = temp.languagesSpoken;
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    temp.languagesSpoken = value;
    this.setState(temp);
  };

  /* Handle nested field change (ie Response field) */
  handleResponseChange = (e, i, j) => {
    let temp = { ...this.state };
    temp.data[i].response[j] = e.target.value;
    this.setState(temp);
  };

  /* Handle nested field change (ie timeOnPage field) */
  handleTimeOnPage = (e, i, startTime, endTime) => {
    let temp = { ...this.state };
    const timeDifference = (endTime - startTime) / 1000;
    const timeInSeconds = Math.round(timeDifference);
    temp.data[i].timeOnPage = timeInSeconds;
    this.setState(temp);
  };

  render() {
    const {
      step,
      age,
      gender,
      education,
      countryOfBirth,
      countryOfResidence,
      ethnicity,
      isNative,
      languagesSpoken,
      data,
    } = this.state;

    const values = {
      age,
      gender,
      education,
      countryOfBirth,
      countryOfResidence,
      ethnicity,
      isNative,
      languagesSpoken,
      data,
    };

    /* Quiz preparation code block 
     Creates a quiz list containing 20 words, and then render all 20 words in switch-case */
    let quizList = [];
    values.data.forEach((word, wordIndex) => {
      quizList.push(
        <Quiz
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleResponseChange={this.handleResponseChange}
          handleTimeOnPage={this.handleTimeOnPage}
          values={values}
          wordIndex={wordIndex}
        />
      );
    });
    let wordEntry;

    /* 1. For cases 4 to 24, check whether it is possible to loop and render Quiz components on
    DIFFERENT pages. Currently, loop only allows us to render identical components multiple
    times on the same page. Different page requires switch-case manipulation.
    2. A potential way to do this will be to use a Javascript Promise, which will wait for a step change in state
    before returning a particular element in the Quiz components array within a case.
    3. There are no major implications on the practical usage of the form, just a refactoring issue. */
    switch (step) {
      default:
        return <h1>Something went wrong!</h1>;
      case 1:
        return <Introduction nextStep={this.nextStep} />;
      case 2:
        return (
          <UserDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleLanguageChange={this.handleLanguageChange}
            values={values}
          />
        );
      case 3:
        return (
          <Instruction prevStep={this.prevStep} nextStep={this.nextStep} />
        );
      case 4:
        wordEntry = 0;
        return quizList[wordEntry];
      case 5:
        wordEntry = 1;
        return quizList[wordEntry];
      case 6:
        wordEntry = 2;
        return quizList[wordEntry];
      case 7:
        wordEntry = 3;
        return quizList[wordEntry];
      case 8:
        wordEntry = 4;
        return quizList[wordEntry];
      case 9:
        wordEntry = 5;
        return quizList[wordEntry];
      case 10:
        wordEntry = 6;
        return quizList[wordEntry];
      case 11:
        wordEntry = 7;
        return quizList[wordEntry];
      case 12:
        wordEntry = 8;
        return quizList[wordEntry];
      case 13:
        wordEntry = 9;
        return quizList[wordEntry];
      case 14:
        wordEntry = 10;
        return quizList[wordEntry];
      case 15:
        wordEntry = 11;
        return quizList[wordEntry];
      case 16:
        wordEntry = 12;
        return quizList[wordEntry];
      case 17:
        wordEntry = 13;
        return quizList[wordEntry];
      case 18:
        wordEntry = 14;
        return quizList[wordEntry];
      case 19:
        wordEntry = 15;
        return quizList[wordEntry];
      case 20:
        wordEntry = 16;
        return quizList[wordEntry];
      case 21:
        wordEntry = 17;
        return quizList[wordEntry];
      case 22:
        wordEntry = 18;
        return quizList[wordEntry];
      case 23:
        wordEntry = 19;
        return quizList[wordEntry];
      case 24:
        return <h1>Feedback</h1>;
    }
  }
}

export default Form;
