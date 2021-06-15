import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./Email.css";
import formData from "../../../utils/formData";

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

  componentDidMount() {
    this.props.removeStateFromLocalStorage();
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
        <Header title={formData.emailPage.title} />

        <Grid container className="email_container" justify="center">
          {/* Content Stay Informed */}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {formData.emailPage.firstParagraphHeader}
            </Typography>
          </Grid>
          {/* Email and Submit */}
          <Grid item xs={12} className="content_grid">
            <Typography variant="body1" className="text">
            {formData.emailPage.firstParagraphDescription.description1}
            </Typography>
            {submitted ? (
              <Typography variant="body1" className="text post_submit">
                {formData.emailPage.firstParagraphDescription.description2}
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
            <Typography variant="h4" id="content">
            {formData.emailPage.secondParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
              {formData.emailPage.secondParagraphDescription}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Email;
