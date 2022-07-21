import {
  Divider,
  Grid,
  Typography,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import React, { Component } from "react";
import appData from "../../../utils/appData";
import {
  checkCompulsoryFieldsForNonSingaporean,
  checkCountryOfBirthSingapore,
  checkEthnicityFieldFilled,
} from "../../../utils/Logic/userInformationLogic";
import Dropdown from "../../Helpers/Dropdown/Dropdown";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./UserDetails.css";

export class UserDetails extends Component {
  render() {
    const {
      values,
      handleChange,
      handleAgeChange,
      handleCountryOfBirthChange,
      handleLanguageChange,
      handleLanguageReset,
      nextPage,
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
        <Header title={appData.informationAboutYouPage.title} />

        {/* Content */}
        <Grid container className="profileContainer" justify="center">
          <Divider id="divider" />
          <Grid item xs={12}>
            {/* User Detail Input Instructions */}
            <Typography variant="body1" className="content1">
              {appData.informationAboutYouPage.instruction1}
              <br />
              <b>{appData.informationAboutYouPage.instruction2}</b>
            </Typography>

            {/* Age */}
            <Dropdown
              className="dropdown"
              inputLabel={
                values.age === ""
                  ? appData.informationAboutYouPage.ageInstruction
                  : ""
              }
              value={values.age}
              name={"age"}
              onChange={handleAgeChange}
              listData={appData.informationAboutYouPage.ages}
            />

            {/* Gender */}
            <Dropdown
              className="dropdown"
              inputLabel={
                values.gender === ""
                  ? appData.informationAboutYouPage.genderInstruction
                  : ""
              }
              value={values.gender}
              name={"gender"}
              onChange={handleChange}
              listData={appData.informationAboutYouPage.genderTypes}
            />

            {/* Education */}
            <Dropdown
              className="dropdown"
              inputLabel={
                values.education === ""
                  ? appData.informationAboutYouPage.educationInstruction
                  : ""
              }
              value={values.education}
              name={"education"}
              onChange={handleChange}
              listData={appData.informationAboutYouPage.educationLevels}
            />

            {/* Country-of-Birth */}
            <Dropdown
              className="dropdown"
              inputLabel={
                values.countryOfBirth === ""
                  ? appData.informationAboutYouPage.birthCountryInstruction
                  : ""
              }
              value={values.countryOfBirth}
              name={"countryOfBirth"}
              onChange={handleCountryOfBirthChange}
              listData={appData.informationAboutYouPage.countries}
            />

            {/* Ethnicity (Show ethnicity only if Country-of-Residence is Singapore) */}
            {checkCountryOfBirthSingapore(values) ? (
              <Dropdown
                className="dropdown"
                inputLabel={
                  values.ethnicity === ""
                    ? appData.informationAboutYouPage.ethnicityInstruction
                    : ""
                }
                value={values.ethnicity}
                name={"ethnicity"}
                onChange={handleChange}
                listData={appData.informationAboutYouPage.ethnicities}
              />
            ) : null}

            {/* Country-of-Residence */}
            <Dropdown
              className="dropdown"
              inputLabel={
                values.countryOfResidence === ""
                  ? appData.informationAboutYouPage.residenceCountryInstruction
                  : ""
              }
              value={values.countryOfResidence}
              name={"countryOfResidence"}
              onChange={handleChange}
              listData={appData.informationAboutYouPage.countries}
            />

            {/* Native Speaker? */}
            <Dropdown
              className="dropdown"
              inputLabel={
                values.isNative === ""
                  ? appData.informationAboutYouPage.nativeSpeakerInstruction
                  : ""
              }
              value={values.isNative}
              name={"isNative"}
              onChange={handleChange}
              listData={appData.informationAboutYouPage.yesAndNo}
            />

            {/* Languages Spoken */}
            <Grid container className="languagesContainer">
              <Grid item xs={8}>
                {/* If "The `value` prop supplied to <select> must be a scalar value if `multiple` is false."
                error appears in console, just ignore it. Basically state should not be array if Dropdown
                component is used. However, Material-UI Multi-Select is buggy. Hence I used a normal
                Select component in Dropdown instead of Multi-Select */}
                <Dropdown
                  className="dropdown"
                  inputLabel={
                    values.languagesSpoken.length === 0
                      ? appData.informationAboutYouPage
                          .otherLanguagesInstruction
                      : ""
                  }
                  value={values.languagesSpoken}
                  name={"languagesSpoken"}
                  onChange={handleLanguageChange}
                  listData={appData.informationAboutYouPage.languagesSpoken}
                />
                <FormButton
                  buttonDescription="Reset Chosen Languages"
                  onClick={handleLanguageReset}
                ></FormButton>
              </Grid>
              <Grid item xs={4}>
                <Typography className="languagesChosenHeader" variant="button">
                  Languages Chosen
                </Typography>
                <Grid item xs={12} className="languagesChosenContainer">
                  <List dense={true} className="list">
                    {values.languagesSpoken.map((language) => {
                      return (
                        <ListItem key={language} className="listItem">
                          <ListItemText primary={language} />
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Continue Button*/}
          <Grid container className="continue_button_container">
            <Grid item xs={12}>
              <FormButton
                buttonDescription={
                  appData.informationAboutYouPage.buttonDescription
                }
                onClick={nextPage}
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
