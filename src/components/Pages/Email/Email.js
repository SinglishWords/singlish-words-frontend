import { Grid, Checkbox, Link, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axiosConfig, { answersUrl } from "../../../utils/Api/axiosConfig";
import formData from "../../../utils/formData";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./Email.css";

export class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: "",
      email: "",
      submitted: false,
      wantsLuckyDraw: false,
      wantsUpdates: false,
    };
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
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
    this.setState({ submitted: true });
  };

  /* If checkbox is not tick, tick it. Otherwise untick it */
  handleCheckboxChange = (e) => {
    e.target.name === "wantsLuckyDraw"
      ? this.setState({
          wantsLuckyDraw: !this.state.wantsLuckyDraw,
        })
      : this.setState({
          wantsUpdates: !this.state.wantsUpdates,
        });
  };

  render() {
    const { email, submitted, wantsLuckyDraw, wantsUpdates } = this.state;
    const isEnabled = wantsLuckyDraw || wantsUpdates;
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
                name="wantsLuckyDraw"
                color="primary"
                className="checkbox"
                checked={wantsLuckyDraw}
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
                name="wantsUpdates"
                color="primary"
                className="checkbox"
                checked={wantsUpdates}
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
