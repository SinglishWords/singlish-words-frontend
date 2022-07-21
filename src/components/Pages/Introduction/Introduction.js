import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import image from "../../../assets/images/NUS_Logo.png";
import appData from "../../../utils/appData";
import { currentDateTime } from "../../../utils/Logic/timeUtil";
import Footer from "../../Helpers/Footer/Footer";
import FormButton from "../../Helpers/FormButton/FormButton";
import PopoverButton from "../../Helpers/PopoverButton/PopoverButton";
import "./Introduction.css";
import NavBar from "../../Helpers/NavBar/NavBar";

export class Introduction extends Component {
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
                {appData.introductionPage.title}
              </h2>
              <h2 className="logoTxt subTxt">
                {appData.introductionPage.subtitle}
              </h2>
            </Grid>
          </Grid>

          {/* Introduction */}
          <Grid container className="introduction" justify="center">
            <Grid item className="introduction_grid">
              <Typography variant="body2" className="text" component={"div"}>
                {appData.introductionPage.introduction}
                <p className="lucky_draw_text">
                  {appData.introductionPage.introductionLuckyDraw}
                </p>
                {appData.introductionPage.introduction2}
                <i>{appData.introductionPage.introduction3}</i>
                <br />
                <br />
                {appData.introductionPage.introduction4}
              </Typography>
            </Grid>
          </Grid>

          {/* Button */}
          {/* Start timer to track user's activity on page*/}
          <Grid container className="form_button">
            <Grid xs={6} item className="lucky_draw_container">
              <PopoverButton
                className="popover_button"
                type="introduction"
                buttonDescription={
                  appData.introductionPage.luckyDrawButtonDescription
                }
                popOverButtonText={
                  appData.introductionPage.luckyDrawInformation
                }
              />
            </Grid>
            <Grid xs={6} item className="continue_button_container">
              <FormButton
                buttonDescription={
                  appData.introductionPage.continueButtonDescription
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

export default Introduction;
