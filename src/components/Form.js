import React, { Component } from "react";
import formFields from "../utils/formFields";
import Email from "./Pages/Email/Email";
import Instruction from "./Pages/Instruction/Instruction";
import Introduction from "./Pages/Introduction/Introduction";
import Quiz from "./Pages/Quiz/Quiz";
import UserDetails from "./Pages/UserDetails/UserDetails";

export class Form extends Component {
  constructor(props) {
    super(props);
    /* If there is a state in the local storage, use it. This handles
    cases where the user refreshes the page. It ensures that the survey data
    is not lost */
    this.stateCopy = JSON.parse(JSON.stringify(formFields));
    this.state =
      JSON.parse(window.localStorage.getItem("formFields")) || formFields;
  }

  saveStateToLocalStorage() {
    window.localStorage.setItem("formFields", JSON.stringify(this.state));
  }

  removeStateFromLocalStorage() {
    window.localStorage.removeItem("formFields");
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentDidMount() {
    this.saveStateToLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  /* Proceed to next step */
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  /* Handle primitive field change (Default handleChange for most fields) 
  Special cases like handleAgeChange and handleCountryofBirthChange are handled 
  separately to preserve code modularity / avoid super functions */
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /* Define a handleChange for Age due to string vs number convertibility consideration*/
  handleAgeChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value !== "" ? +e.target.value : e.target.value,
    });
  };

  /* If user changes to another country of birth, 
  then we should clear the ethnicity field because default is Singapore*/
  handleCountryOfBirthChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      ethnicity: "",
    });
  };

  /* Handle array field change (ie languagesSpoken field)
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

  /* Handle nested field change (ie response field) */
  handleResponseChange = (e, i, j) => {
    let temp = { ...this.state };
    temp.data[i].response[j] = e.target.value;
    this.setState(temp);
  };

  /* Handle nested field change (ie timeOnPage field) */
  handleTimeOnPage = (i, pageStartTime, pageEndTime) => {
    let temp = { ...this.state };
    const timeDifference = (pageEndTime - pageStartTime) / 1000;
    const timeInSeconds = Math.round(timeDifference);
    temp.data[i].timeOnPage = timeInSeconds;
    this.setState(temp);
  };

  /* Handle time in which user starts and ends on form (ie startTime and endTime fields)
  Target value for buttons is null. Hence, we can't use e.target.value unlike handleChange*/
  handleTimeOnForm = (field, dateTime) => {
    this.setState({
      [field]: dateTime,
    });
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
      startTime,
      endTime,
      data,
    } = this.state;

    const values = {
      step,
      age,
      gender,
      education,
      countryOfBirth,
      countryOfResidence,
      ethnicity,
      isNative,
      languagesSpoken,
      startTime,
      endTime,
      data,
    };

    /* Case 4 to 23 will be used for Quiz words. When case is empty, it will share the next closest
    non-empty code block (ie case 23). 
    Step 24 will trigger case 24, which is the Email component*/
    switch (step) {
      default:
        return <h1>Something went wrong!</h1>;
      case 1:
        return (
          <Introduction
            nextStep={this.nextStep}
            values={values}
            handleTimeOnForm={this.handleTimeOnForm}
          />
        );
      case 2:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleAgeChange={this.handleAgeChange}
            handleCountryOfBirthChange={this.handleCountryOfBirthChange}
            handleLanguageChange={this.handleLanguageChange}
            values={values}
          />
        );
      case 3:
        return <Instruction nextStep={this.nextStep} />;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        /* At case 23, initial step will be 4. Step will slowly increase up to 23 to match final case of 23.
        Hence, all the quiz components will be rendered. At step 24, case 24 (Email component) is executed. */
        return (
          <Quiz
            nextStep={this.nextStep}
            handleResponseChange={this.handleResponseChange}
            handleTimeOnPage={this.handleTimeOnPage}
            handleTimeOnForm={this.handleTimeOnForm}
            values={values}
            wordIndex={step - 4}
          />
        );
      case 24:
        /* Send POST here */
        this.removeStateFromLocalStorage();
        /* Reset state to route back to Introduction Page */
        this.state = this.stateCopy;
        return <Email />;
    }
  }
}

export default Form;
