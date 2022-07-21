import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import image from "../../../assets/images/NUS_Logo.png";
import appData from "../../../utils/appData";
import { currentDateTime } from "../../../utils/Logic/timeUtil";
import Footer from "../../Helpers/Footer/Footer";
import FormButton from "../../Helpers/FormButton/FormButton";
import "./IntroductionStudentVersion.css";
import NavBar from "../../Helpers/NavBar/NavBar";

export class IntroductionStudentVersion extends Component {
  constructor(props) {
    super(props);
    this.currentDateTime = currentDateTime();
  }

  render() {
    const { handleFieldChange, nextPage } = this.props;

    return (
      <Grid container>
        <NavBar />
        <Grid item className="container">
          {/* WAS title*/}
          <Grid container className="row">
            <Grid item xs={4} className="image_container">
              <img className="image" src={image} alt="" />
            </Grid>
            <Grid item className="title" xs={8}>
              <h2 className="logoTxt titleTxt">
                {appData.introductionPageStudent.title}
              </h2>
              <h2 className="logoTxt subTxt">
                {appData.introductionPageStudent.subtitle}
              </h2>
            </Grid>
          </Grid>

          {/* Introduction */}
          <Grid container className="introduction" justify="center">
            <Grid item className="introduction_grid">
              <Typography variant="body2" className="text" component={"div"}>
                {appData.introductionPageStudent.introduction}
                <p className="email_text">
                  <b>{appData.introductionPageStudent.introductionEmail}</b>
                </p>
                {appData.introductionPageStudent.introduction2}
                <i>{appData.introductionPageStudent.introduction3}</i>
                <br />
                <br />
                {appData.introductionPageStudent.introduction4}
              </Typography>
            </Grid>
          </Grid>

          {/* Button */}
          {/* Start timer to track user's activity on page*/}
          <Grid container className="form_button">
            <Grid xs={6} item className="continue_button_container">
              <FormButton
                buttonDescription={
                  appData.introductionPageStudent.continueButtonDescription
                }
                onClick={(e) => {
                  handleFieldChange("startTime", currentDateTime());
                  handleFieldChange("uuid", "swow-" + uuidv4());
                  nextPage(e);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default IntroductionStudentVersion;
