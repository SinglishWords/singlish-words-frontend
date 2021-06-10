import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
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
    };
    this.textRef = React.createRef();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    /* To add this.continue here*/
    this.setState({ submitted: true });
  };

  render() {
    const { email, submitted } = this.state;
    return (
      <Grid container>
        {/* Thank you header*/}
        <Header title={"Thank you!"} />

        <Grid container className="emailContainer" justify="center">
          {/* Content Stay Informed */}
          <Grid item xs={12}>
            <Typography variant="h4" className="title">
              Stay informed
            </Typography>
          </Grid>

          {/* Email and Submit */}
          <Grid item xs={12} className="content_grid">
            <Typography variant="body1" className="text">
              Enter your email if you'd like to stay informed about the study
              (remains confidential).
            </Typography>
            {submitted ? (
              <Typography variant="body1" className="text post_submit">
                Thank you for your submission!
              </Typography>
            ) : (
              <Grid container className="enter_email">
                <ValidatorForm onSubmit={this.handleSubmit}>
                  <Grid container>
                    <Grid item xs={6} className="text_validator_grid">
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
                    <Grid item xs={6} className="submit_button">
                      <FormButton
                        disabled={submitted}
                        buttonDescription={
                          (submitted && "Submitted") || (!submitted && "Submit")
                        }
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </ValidatorForm>
              </Grid>
            )}
          </Grid>

          {/* Share the study*/}
          <Grid item xs={12}>
            <Typography variant="h4" className="title">
              Share the study
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                To get enough words and make the mental dictionary useful, we
                need many helping hands (it takes 250,000 persons!). If you want
                to help, just share the study with family and friends or come
                back some other time for new words:
                https://smallworldofwords.org/en
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Email;
