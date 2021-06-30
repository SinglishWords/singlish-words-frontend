import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import image from "../../../assets/images/NUS_Logo.png";
import formData from "../../../utils/formData";
import FormButton from "../../Helpers/FormButton/FormButton";
import "./Introduction.css";
import { currentDateTime } from "../../../utils/Logic/timeUtil";
import PopoverButton from "../../Helpers/PopoverButton/PopoverButton";

export class Introduction extends Component {
  constructor(props) {
    super(props);
    this.currentDateTime = currentDateTime();
  }

  render() {
    const { handleTimeOnForm, nextPage } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} className="container">
          {/* WAS title*/}
          <Grid container className="row">
            <Grid item xs={4}>
              <img className="image" src={image} alt="" />
            </Grid>
            <Grid item className="title" xs={8}>
              <h2 className="logoTxt titleTxt">
                {formData.introductionPage.title}
              </h2>
              <h2 className="logoTxt subTxt">
                {formData.introductionPage.subtitle}
              </h2>
            </Grid>
          </Grid>

          {/* Introduction */}
          <Grid container className="introduction" justify="center">
            <Grid item xs={12} className="introduction_grid">
              <Typography variant="body2" className="text" component={"div"}>
                {formData.introductionPage.introduction}
                <p className="lucky_draw_text">
                  {formData.introductionPage.introductionLuckyDraw}
                </p>
                {formData.introductionPage.introduction2}
                <i>{formData.introductionPage.introduction3}</i>
                <br />
                <br />
                {formData.introductionPage.introduction4}
              </Typography>
            </Grid>
          </Grid>

          {/* Button */}
          {/* Start timer to track user's activity on page*/}
          <Grid container className="form_button">
            <Grid item xs={6} className="lucky_draw_container">
              <PopoverButton
                buttonDescription={
                  formData.introductionPage.luckyDrawButtonDescription
                }
                popOverButtonText={
                  formData.introductionPage.luckyDrawInformation
                }
              />
            </Grid>
            <Grid item xs={6} className="continue_button_container">
              <FormButton
                buttonDescription={
                  formData.introductionPage.continueButtonDescription
                }
                onClick={(e) => {
                  nextPage(e);
                  handleTimeOnForm("startTime", this.currentDateTime);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Introduction;
