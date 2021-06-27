import { Checkbox, Grid, Link, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axiosConfig, {
  answersUrl,
  patchEmailUrl,
} from "../../../utils/Api/axiosConfig";
import formData from "../../../utils/formData";
import { emailFields } from "../../../utils/formFields";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./Email.css";

export class Email extends Component {
  constructor(props) {
    super(props);
    this.state = emailFields;
    this.textRef = React.createRef();
  }

  componentDidMount() {
    /* Submit quiz answers */
    let formStateCopy = JSON.parse(JSON.stringify(this.props.formState));
    delete formStateCopy["step"];
    let answers = JSON.stringify(formStateCopy);

    console.log("Initiated POST request to server with the following payload:");
    console.log(answers);
    axiosConfig
      .post(answersUrl, answers)
      .then((response) => {
        console.log("Server Response");
        console.log(response);
        if (response.status === 201) {
          alert("Responses submitted successfully!");
          /* Append the form entry id to state in case user wishes to submit email
        for lucky draw or updates subscription */
          this.setState({
            id: response.data.id,
          });
        } else {
          alert(
            "Something went wrong in responses submission. Responses were submitted but status code returned is wrong. Please contact Dr Cynthia Siew at cynthia@nus.edu.sg."
          );
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Error! Responses submission failed. Please contact Dr Cynthia Siew at cynthia@nus.edu.sg.`
        );
      });

    /* Clear local storage */
    this.props.removeStateFromLocalStorage();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      submitted: true,
    });
    /* Submit email and checkbox options*/
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    delete stateCopy["submitted"];
    /* Convert boolean values to string for database compatibility */
    stateCopy["wantLuckyDraw"] = stateCopy["wantLuckyDraw"].toString();
    stateCopy["wantUpdate"] = stateCopy["wantUpdate"].toString();
    let emailData = JSON.stringify(stateCopy);

    console.log("Initiated POST request to server with the following payload:");
    console.log(emailData);
    axiosConfig
      .patch(patchEmailUrl, emailData)
      .then((response) => {
        console.log("Server Response");
        console.log(response);
        if (response.status === 204) {
          alert("Email submitted successfully!");
        } else {
          alert(
            "Something went wrong in email submission. Email was submitted but status code returned is wrong. Please contact Dr Cynthia Siew at cynthia@nus.edu.sg."
          );
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Error! Email submission failed. Please contact Dr Cynthia Siew at cynthia@nus.edu.sg.`
        );
      });
  };

  /* If checkbox is not tick, tick it. Otherwise untick it */
  handleCheckboxChange = (e) => {
    e.target.name === "wantLuckyDraw"
      ? this.setState({
          wantLuckyDraw: !this.state.wantLuckyDraw,
        })
      : this.setState({
          wantUpdate: !this.state.wantUpdate,
        });
  };

  render() {
    const { email, submitted, wantLuckyDraw, wantUpdate } = this.state;
    const isEnabled = wantLuckyDraw || wantUpdate;
    return (
      <Grid container>
        {/* Thank you header*/}
        <Header title={formData.emailPage.title} />

        <Grid container className="email_container" justify="center">
          {/* Paragraph 1 - What we are trying to do */}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {formData.emailPage.firstParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {formData.emailPage.firstParagraphDescription}
              </Typography>
            </Grid>
          </Grid>

          {/* Paragraph 2 - If you would like to take part in the lucky draw or receive updates about this research */}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {formData.emailPage.secondParagraphHeader}
            </Typography>
          </Grid>

          {/* Email and Submit */}
          <Grid item xs={12} className="content_grid">
            <Typography variant="body1" className="text">
              {formData.emailPage.secondParagraphDescription.description1}
            </Typography>
            {/* Checkboxes */}
            <Grid item xs={12} className="checkbox_container">
              <Checkbox
                name="wantLuckyDraw"
                color="primary"
                className="checkbox"
                checked={wantLuckyDraw}
                onChange={this.handleCheckboxChange}
              />
              <Typography variant="body1" className="text checkbox_text">
                {
                  formData.emailPage.secondParagraphDescription
                    .luckyDrawCheckboxDescription
                }
              </Typography>
            </Grid>
            <Grid item xs={12} className="checkbox_container">
              <Checkbox
                name="wantUpdate"
                color="primary"
                className="checkbox"
                checked={wantUpdate}
                onChange={this.handleCheckboxChange}
              />
              <Typography variant="body1" className="text checkbox_text">
                {
                  formData.emailPage.secondParagraphDescription
                    .updatesCheckboxDescription
                }
              </Typography>
            </Grid>

            {/* Email Input field and Submit button*/}
            {submitted ? (
              <Typography variant="body1" className="text post_submit">
                {formData.emailPage.secondParagraphDescription.description2}
              </Typography>
            ) : (
              <Grid container className="enter_email">
                <ValidatorForm onSubmit={this.handleSubmit}>
                  <Grid container>
                    <Grid item xs={5} className="text_validator_grid">
                      <TextValidator
                        inputRef={this.textRef}
                        label="Your email"
                        onChange={this.handleChange}
                        name="email"
                        value={email}
                        validators={["required", "isEmail"]}
                        errorMessages={[
                          "This field is required",
                          "Email is not valid",
                        ]}
                      />
                    </Grid>
                    <Grid item xs={7} className="submit_button">
                      <FormButton
                        disabled={!isEnabled}
                        buttonDescription={"Submit"}
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </ValidatorForm>
              </Grid>
            )}
            <Typography variant="body1" className="text">
              {formData.emailPage.secondParagraphDescription.description3}
            </Typography>
          </Grid>

          {/* Paragraph 3 - Get in touch*/}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {formData.emailPage.thirdParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text" display="inline">
                {formData.emailPage.thirdParagraphDescription.description1}
              </Typography>
              <Typography variant="body1" className="text" display="inline">
                <Link href="mailto:smallworldofsinglishwords@gmail.com">
                  <b>
                    <u>{formData.emailPage.thirdParagraphDescription.email}</u>
                  </b>
                </Link>
              </Typography>
              <br />
              <br />
              <Typography variant="body1" className="text" display="inline">
                <b>
                  {formData.emailPage.thirdParagraphDescription.description2}
                </b>
              </Typography>
              <Typography variant="body1" className="text" display="inline">
                <Link href="mailto:cynthia@nus.edu.sg">
                  <b>
                    <u>{formData.emailPage.thirdParagraphDescription.email2}</u>
                  </b>
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {/* Paragraph 4 - Share the study*/}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {formData.emailPage.fourthParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {formData.emailPage.fourthParagraphDescription}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Email;
