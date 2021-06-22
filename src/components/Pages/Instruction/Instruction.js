import { Divider, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import axiosConfig, { questionsUrl } from "../../../utils/Api/axiosConfig";
import formData from "../../../utils/formData";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./Instruction.css";

export class Instruction extends Component {
  componentDidMount() {
    /* Make a GET request to pull questions */
    axiosConfig
      .get(questionsUrl)
      .then((response) => {
        let question = response.data;
        console.log("Initiated GET request to server");
        console.log("Response: ");
        console.log(question);
        this.props.handleWordPopulation(question);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { nextPage } = this.props;

    return (
      <Grid container>
        {/* Header */}
        <Header title={formData.instructionsPage.title} />

        <Grid container className="instruction_container" justify="center">
          <Divider />
          <Grid container justify="center">
            {/* Content How it works...*/}
            <Grid item xs={12}>
              <Typography variant="h4" className="title" id="content">
                {formData.instructionsPage.firstParagraphHeader}
              </Typography>
            </Grid>

            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {
                  formData.instructionsPage.firstParagraphDescription
                    .description1
                }{" "}
                <b>
                  {
                    formData.instructionsPage.firstParagraphDescription
                      .description2
                  }
                </b>{" "}
                {
                  formData.instructionsPage.firstParagraphDescription
                    .description3
                }
                {"   "}
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                {
                  formData.instructionsPage.firstParagraphDescription
                    .description4
                }{" "}
                <em>
                  {
                    formData.instructionsPage.firstParagraphDescription
                      .description5
                  }
                </em>{" "}
                {
                  formData.instructionsPage.firstParagraphDescription
                    .description6
                }
              </Typography>
            </Grid>

            {/* Content Some hints...*/}
            <Grid item xs={12}>
              <Typography variant="h4" className="title" id="content">
                Some hints
              </Typography>
            </Grid>

            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {
                  formData.instructionsPage.secondParagraphDescription
                    .description1
                }
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                {
                  formData.instructionsPage.secondParagraphDescription
                    .description2
                }
              </Typography>
              <br />
              <Typography variant="body1" className="text">
                {
                  formData.instructionsPage.secondParagraphDescription
                    .description3
                }
                <em>
                  {
                    formData.instructionsPage.secondParagraphDescription
                      .description4
                  }
                </em>{" "}
                {
                  formData.instructionsPage.secondParagraphDescription
                    .description5
                }
              </Typography>
            </Grid>
          </Grid>

          {/* Continue Button*/}
          <Grid container>
            <Grid item xs={12}>
              <FormButton
                buttonDescription={
                  formData.instructionsPage.secondParagraphDescription
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
