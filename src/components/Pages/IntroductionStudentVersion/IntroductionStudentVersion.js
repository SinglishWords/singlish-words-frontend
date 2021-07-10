import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import image from "../../../assets/images/NUS_Logo.png";
import formData from "../../../utils/formData";
import { currentDateTime } from "../../../utils/Logic/timeUtil";
import Footer from "../../Helpers/Footer/Footer";
import FormButton from "../../Helpers/FormButton/FormButton";
import "./IntroductionStudentVersion.css";

export class IntroductionStudentVersion extends Component {
  constructor(props) {
    super(props);
    this.currentDateTime = currentDateTime();
  }

  render() {
    const { handleTimeOnForm, nextPage } = this.props;

    return (
      <Grid container>
        <Grid item className="container">
          {/* WAS title*/}
          <Grid container className="row">
            <Grid item xs={4} className="image_container">
              <img className="image" src={image} alt="" />
            </Grid>
            <Grid item className="title" xs={8}>
              <h2 className="logoTxt titleTxt">
                {formData.introductionPageStudent.title}
              </h2>
              <h2 className="logoTxt subTxt">
                {formData.introductionPageStudent.subtitle}
              </h2>
            </Grid>
          </Grid>

          {/* Introduction */}
          <Grid container className="introduction" justify="center">
            <Grid item className="introduction_grid">
              <Typography variant="body2" className="text" component={"div"}>
                {formData.introductionPageStudent.introduction}
                <p className="email_text">
                  <b>{formData.introductionPageStudent.introductionEmail}</b>
                </p>
                {formData.introductionPageStudent.introduction2}
                <i>{formData.introductionPageStudent.introduction3}</i>
                <br />
                <br />
                {formData.introductionPageStudent.introduction4}
              </Typography>
            </Grid>
          </Grid>

          {/* Button */}
          {/* Start timer to track user's activity on page*/}
          <Grid container className="form_button">
            <Grid xs={6} item className="continue_button_container">
              <FormButton
                buttonDescription={
                  formData.introductionPageStudent.continueButtonDescription
                }
                onClick={(e) => {
                  nextPage(e);
                  handleTimeOnForm("startTime", this.currentDateTime);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Footer/>
      </Grid>
    );
  }
}

export default IntroductionStudentVersion;
