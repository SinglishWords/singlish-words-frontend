import { Button, Divider, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import formData from "../../utils/formData";
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
        <Header title={formData.instructionsPage.title} />

        <Grid container className="instructionContainer" justify="center">
          <Divider />
          <Grid container justify="center">
            {/* Content How it works...*/}
            <Grid item xs={12}>
              <Typography variant="h4" className="title">
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
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="button"
                >
                  {
                    formData.instructionsPage.firstParagraphDescription
                      .buttonDescription1
                  }
                </Button>
                {"."}
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
                {"   "}
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="button"
                >
                  {
                    formData.instructionsPage.firstParagraphDescription
                      .buttonDescription2
                  }
                </Button>{" "}
                {
                  formData.instructionsPage.firstParagraphDescription
                    .description7
                }
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
                <em>
                  {
                    formData.instructionsPage.secondParagraphDescription
                      .description3
                  }
                </em>{" "}
                {
                  formData.instructionsPage.secondParagraphDescription
                    .description4
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
                onClick={this.continue}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Instruction;
