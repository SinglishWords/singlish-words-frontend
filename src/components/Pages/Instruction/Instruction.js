import { Divider, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import axiosConfig, { questionsUrl } from "../../../utils/Api/axiosConfig";
import appData from "../../../utils/appData";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./Instruction.css";

export class Instruction extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const numberOfWordsToGet = this.props.values.data.length;
    const { previousStep } = this.props;
    /* Make a GET request to pull questions */
    axiosConfig
      .get(questionsUrl + "?limit=" + numberOfWordsToGet)
      .then((response) => {
        let question = response.data;
        console.log("Initiated GET request to server");
        console.log("Response: ");
        console.log(question);

        /* Something is wrong if the number of words we requested from DB does not
        match the number of words we get, or if DB returns null. => Redirect user to 
        Introduction Page. */
        if (question.length !== numberOfWordsToGet || question === null) {
          // To uncomment
          // previousStep();
          alert(
            `Database is down for maintenance. Please try again later. Alternatively, you can contact the project team at singlishwords@nus.edu.sg.`
          );
        } else {
          this.props.handleWordPopulation(question);
        }
      })
      .catch((error) => {
        console.log(error);
        // To uncomment
        // previousStep();
        alert(
          `Database is down for maintenance. Please try again later. Alternatively, you can contact the project team at singlishwords@nus.edu.sg.`
        );
      });
  }

  render() {
    const { nextPage } = this.props;

    return (
      <Grid container>
        {/* Header */}
        <Header title={appData.instructionsPage.title} />

        <Grid container className="instruction_container" justify="center">
          <Divider />
          <Grid container justify="center">
            {/* Content How it works...*/}
            <Grid item xs={12}>
              <Typography variant="h4" className="title" id="content">
                {appData.instructionsPage.firstParagraphHeader}
              </Typography>
            </Grid>

            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {
                  appData.instructionsPage.firstParagraphDescription
                    .description1
                }{" "}
                <b>
                  {
                    appData.instructionsPage.firstParagraphDescription
                      .description2
                  }
                </b>{" "}
                {
                  appData.instructionsPage.firstParagraphDescription
                    .description3
                }
                {"   "}
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                {
                  appData.instructionsPage.firstParagraphDescription
                    .description4
                }{" "}
                <em>
                  {
                    appData.instructionsPage.firstParagraphDescription
                      .description5
                  }
                </em>{" "}
                {
                  appData.instructionsPage.firstParagraphDescription
                    .description6
                }
              </Typography>
            </Grid>

            {/* Content Some hints...*/}
            <Grid item xs={12}>
              <Typography variant="h4" className="title" id="content">
                {appData.instructionsPage.secondParagraphHeader}
              </Typography>
            </Grid>

            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {
                  appData.instructionsPage.secondParagraphDescription
                    .description1
                }
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                {
                  appData.instructionsPage.secondParagraphDescription
                    .description2
                }
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                {
                  appData.instructionsPage.secondParagraphDescription
                    .description3
                }
                <em>
                  {
                    appData.instructionsPage.secondParagraphDescription
                      .description4
                  }
                </em>{" "}
                {
                  appData.instructionsPage.secondParagraphDescription
                    .description5
                }
              </Typography>
            </Grid>
          </Grid>

          {/* Continue Button*/}
          <Grid container className="continue_container">
            <Grid item xs={12} className="continue_button_container">
              <FormButton
                buttonDescription={
                  appData.instructionsPage.secondParagraphDescription
                    .buttonDescription
                }
                onClick={nextPage}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Instruction;
