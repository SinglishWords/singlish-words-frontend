import { Checkbox, Grid, Link, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axiosConfig, {
  answersUrl,
  emailUrl,
} from "../../../utils/Api/axiosConfig";
import formData from "../../../utils/formData";
import { emailFields } from "../../../utils/formFields";
import Footer from "../../Helpers/Footer/Footer";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./EmailStudentVersion.css";

export class EmailStudentVersion extends Component {
  constructor(props) {
    super(props);
    this.state = emailFields;
    this.textRef = React.createRef();
  }

  /* Submit quiz answers */
  componentDidMount() {
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

    /* Append timesOnPages to email*/
    let timesOnPages = [];
    formStateCopy.data.forEach((element) => {
      timesOnPages.push(element.timeOnPage);
    });
    this.setState({
      timesOnPages: timesOnPages,
    });

    /* Clear local storage */
    this.props.removeStateFromLocalStorage();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /* Submit email and checkbox options*/
  handleSubmit = () => {
    this.setState({
      submitted: true,
    });
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    delete stateCopy["submitted"];
    /* Convert boolean values to string for database compatibility */
    stateCopy["wantLuckyDraw"] = stateCopy["wantLuckyDraw"].toString();
    stateCopy["wantUpdate"] = stateCopy["wantUpdate"].toString();
    let emailData = JSON.stringify(stateCopy);

    console.log("Initiated POST request to server with the following payload:");
    console.log(emailData);
    axiosConfig
      .post(emailUrl, emailData)
      .then((response) => {
        console.log("Server Response");
        console.log(response);
        if (response.status === 201) {
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
        <Header title={formData.emailPageStudent.title} />

        <Grid container className="email_container" justify="center">
          {/* Paragraph 1 - What we are trying to do */}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {formData.emailPageStudent.firstParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {formData.emailPageStudent.firstParagraphDescription}
              </Typography>
            </Grid>
          </Grid>

          {/* Paragraph 2 - If you would like to take part in the lucky draw or receive updates about this research */}
          <Grid item xs={12} className="receive_updates_lucky_draw_header">
            <Typography variant="h4" id="content">
              {formData.emailPageStudent.secondParagraphHeader}
            </Typography>
          </Grid>

          {/* Email and Submit */}
          <Grid item xs={12} className="content_grid">
            <Typography variant="body1" className="text">
              {
                formData.emailPageStudent.secondParagraphDescription
                  .description1
              }
              <b>
                {formData.emailPageStudent.secondParagraphDescription.email}
              </b>
              {
                formData.emailPageStudent.secondParagraphDescription
                  .description2
              }
            </Typography>
            {/* Checkboxes */}
            <Grid container>
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
                    formData.emailPageStudent.secondParagraphDescription
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
                    formData.emailPageStudent.secondParagraphDescription
                      .updatesCheckboxDescription
                  }
                </Typography>
              </Grid>
            </Grid>

            {/* Email Input field and Submit button*/}
            {submitted ? (
              <Typography variant="body1" className="text post_submit">
                {
                  formData.emailPageStudent.secondParagraphDescription
                    .description3
                }
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
              {
                formData.emailPageStudent.secondParagraphDescription
                  .description4
              }
            </Typography>
          </Grid>

          {/* Paragraph 4 - Get in touch*/}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {formData.emailPageStudent.thirdParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {
                  formData.emailPageStudent.thirdParagraphDescription
                    .description1
                }
              </Typography>
              <Typography variant="body1" className="text">
                <Link href="mailto:smallworldofsinglishwords@gmail.com">
                  <b>
                    <u>
                      {
                        formData.emailPageStudent.thirdParagraphDescription
                          .email
                      }
                    </u>
                  </b>
                </Link>
              </Typography>
              <br />
              <br />
              <Typography variant="body1" className="text" display="inline">
                <b>
                  {
                    formData.emailPageStudent.thirdParagraphDescription
                      .description2
                  }
                </b>
              </Typography>
              <Typography variant="body1" className="text" display="inline">
                <Link href="mailto:cynthia@nus.edu.sg">
                  <b>
                    <u>
                      {
                        formData.emailPageStudent.thirdParagraphDescription
                          .email2
                      }
                    </u>
                  </b>
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {/* Paragraph 5 - Share the study*/}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {formData.emailPageStudent.fourthParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {formData.emailPageStudent.fourthParagraphDescription}
                <Link
                  className="site_link"
                  onClick={() => window.open("/", "_blank")}
                >
                  <b>
                    <u>{window.location.host}</u>
                  </b>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default EmailStudentVersion;
