import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import image from "../../../assets/images/SWOW_Icon.png";
import formData from "../../../utils/formData";
import FormButton from "../../Helpers/FormButton/FormButton";
import "./Introduction.css";
import { currentDateTime } from "../../../utils/Logic/timeutil";

export class Introduction extends Component {
  constructor(props) {
    super(props);
    this.currentDateTime = currentDateTime();
  }

  render() {
    const { handleTimeOnForm, nextPage } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} className="container" >
          {/* WAS title*/}
          <Grid container className="row">
            <Grid item lg={2} md={2} sm={2} xs={3}>
              <img className="image" src={image} alt="" />
            </Grid>
            <Grid item className="title" lg={10} md={10} sm={10} xs={9}>
              <h2 className="logoTxt">{formData.introductionPage.title}</h2>
            </Grid>
          </Grid>

          {/* Introduction */}
          <Grid container className="introduction" justify="center">
            <Grid item xs={12} className="introduction_grid">
              <Typography variant="body2" className="text">
                {formData.introductionPage.introduction}
              </Typography>
            </Grid>
          </Grid>

          {/* Button */}
          {/* Start timer to track user's activity on page*/}
          <Grid container className="formButton">
            <Grid item xs={12}>
              <FormButton
                buttonDescription={formData.introductionPage.buttonDescription}
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
