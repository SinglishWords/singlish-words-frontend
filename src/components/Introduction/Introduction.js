import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import image from "../../assets/images/SWOW_Icon.png";
import formData from "../../utils/formData";
import FormButton from "../FormButton/FormButton";
import "./Introduction.css";

export class Introduction extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <Grid container>
        <Grid className="container" item xs={12}>
          {/* WAS title*/}
          <Grid container className="row">
            <Grid item lg={2} md={2} sm={2} xs={3}>
              <img className="image" src={image} alt="" />
            </Grid>
            <Grid item className="title" lg={10} md={10} sm={10} xs={9}>
              <h2 class="logoTxt">{formData.title}</h2>
            </Grid>
          </Grid>

          {/* Introduction */}
          <Grid container className="introduction" justify="center">
            <Grid item xs={12} className="introduction_grid">
              <Typography variant="body2" className="text">
                {formData.introduction}
              </Typography>
            </Grid>
          </Grid>

          {/* Button */}
          <Grid className="formButton">
            <FormButton
              buttonDescription="I want to participate!"
              onClick={this.continue}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Introduction;
