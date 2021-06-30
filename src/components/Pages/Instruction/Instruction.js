import { Divider, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axiosConfig, { questionsUrl } from "../../../utils/Api/axiosConfig";
import formData from "../../../utils/formData";
import { recaptchaFields } from "../../../utils/formFields";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./Instruction.css";

export class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = recaptchaFields;
  }

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

  handleRecaptchaChange = () => {
    this.setState({ isVerified: true });
  };

  render() {
    const { nextPage } = this.props;
    const { isVerified } = this.state;

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
                {formData.instructionsPage.secondParagraphHeader}
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
          <Grid container className="continue_container">
            <Grid className="recaptcha" item xs={12}>
              <ReCAPTCHA
                /* To change site key once actual site is up.
                Use smallworldofsinglishwords@gmail.com */
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={this.handleRecaptchaChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormButton
                buttonDescription={
                  formData.instructionsPage.secondParagraphDescription
                    .buttonDescription
                }
                onClick={nextPage}
                disabled={!isVerified}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Instruction;
