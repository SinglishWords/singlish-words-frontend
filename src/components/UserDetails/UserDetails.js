import { Divider, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import formData from "../../utils/formData";
import {
  checkCompulsoryFieldsForNonSingaporean,
  checkCountryOfBirthSingapore,
  checkEthnicityFieldFilled,
} from "../../utils/Logic/userInformationLogic";
import Dropdown from "../Dropdown/Dropdown";
import FormButton from "../FormButton/FormButton";
import Header from "../Header/Header";
import MultiselectDropdown from "../MultiselectDropdown/MultiselectDropdown";
import "./UserDetails.css";

export class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values,
      handleChange,
      handleAgeChange,
      handleCountryOfBirthChange,
      handleLanguageChange,
    } = this.props;
    /* The below block of code disables/enables the "Continue" button.
    Firstly, check that all compulsory fields (Age, Gender, Education, Birth Country, 
    Residence Country, Native Speaker) are filled.
    Secondly, if participant is a Singaporean, check that Ethnicity Field is filled. */
    const compusloryFieldsFilled =
      checkCompulsoryFieldsForNonSingaporean(values);
    const isSingaporean = checkCountryOfBirthSingapore(values);
    const isEnabled = isSingaporean
      ? compusloryFieldsFilled && checkEthnicityFieldFilled(values)
      : compusloryFieldsFilled;

    return (
      <Grid container>
        {/* Header */}
        <Header title={formData.informationAboutYouPage.title} />

        {/* Content */}
        <Grid container className="profileContainer" justify="center">
          <Divider />
          <Grid item xs={12}>
            {/* User Detail Input Instructions */}
            <Typography variant="body1" className="content1">
              {formData.informationAboutYouPage.instruction1}
              <br />
              <b>{formData.informationAboutYouPage.instruction2}</b>
            </Typography>

            {/* Age */}
            <Dropdown
              inputLabel={formData.informationAboutYouPage.ageInstruction}
              value={values.age}
              name={"age"}
              onChange={handleAgeChange}
              listData={formData.informationAboutYouPage.ages}
            />

            {/* Gender */}
            <Dropdown
              inputLabel={formData.informationAboutYouPage.genderInstruction}
              value={values.gender}
              name={"gender"}
              onChange={handleChange}
              listData={formData.informationAboutYouPage.genderTypes}
            />

            {/* Education */}
            <Dropdown
              inputLabel={formData.informationAboutYouPage.educationInstruction}
              value={values.education}
              name={"education"}
              onChange={handleChange}
              listData={formData.informationAboutYouPage.educationLevels}
            />

            {/* Country-of-Birth */}
            <Dropdown
              inputLabel={
                formData.informationAboutYouPage.birthCountryInstruction
              }
              value={values.countryOfBirth}
              name={"countryOfBirth"}
              onChange={handleCountryOfBirthChange}
              listData={formData.informationAboutYouPage.countries}
            />

            {/* Ethnicity (Show ethnicity only if Country-of-Residence is Singapore) */}
            {checkCountryOfBirthSingapore(values) ? (
              <Dropdown
                inputLabel={
                  formData.informationAboutYouPage.ethnicityInstruction
                }
                value={values.ethnicity}
                name={"ethnicity"}
                onChange={handleChange}
                listData={formData.informationAboutYouPage.ethnicities}
              />
            ) : null}

            {/* Country-of-Residence */}
            <Dropdown
              inputLabel={
                formData.informationAboutYouPage.residenceCountryInstruction
              }
              value={values.countryOfResidence}
              name={"countryOfResidence"}
              onChange={handleChange}
              listData={formData.informationAboutYouPage.countries}
            />

            {/* Native Speaker? */}
            <Dropdown
              inputLabel={
                formData.informationAboutYouPage.nativeSpeakerInstruction
              }
              value={values.isNative}
              name={"isNative"}
              onChange={handleChange}
              listData={formData.informationAboutYouPage.yesAndNo}
            />

            {/* Languages Spoken */}
            <MultiselectDropdown
              inputLabel={
                formData.informationAboutYouPage.otherLanguagesInstruction
              }
              value={values.languagesSpoken}
              name={"languagesSpoken"}
              onChange={handleLanguageChange}
              listData={formData.informationAboutYouPage.languagesSpoken}
            />
          </Grid>

          {/* Continue Button*/}
          <Grid container>
            <Grid item xs={12}>
              <FormButton
                buttonDescription={
                  formData.informationAboutYouPage.buttonDescription
                }
                onClick={this.continue}
                disabled={!isEnabled}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default UserDetails;
