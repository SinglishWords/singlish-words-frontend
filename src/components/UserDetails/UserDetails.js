import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import formData from "../../utils/formData";
import FormButton from "../FormButton/FormButton";
import Header from "../Header/Header";
import "./UserDetails.css";

export class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleLanguageChange } = this.props;
    /* The below block of code disables/enables the "Continue" button.
    Firstly, check that all compulsory fields (Age, Gender, Education, Birth Country, 
    Residence Country, Native Speaker) are filled.
    Secondly, if participant is a Singaporean, check that Ethnicity Field is filled. */
    const compusloryFieldsFilled =
      values.age.length > 0 &&
      values.gender.length > 0 &&
      values.education.length > 0 &&
      values.countryOfBirth.length > 0 &&
      values.countryOfResidence.length > 0 &&
      values.isNative.length > 0;
    const isSingaporean = values.countryOfBirth === "Singapore";
    const isEnabled = isSingaporean
      ? compusloryFieldsFilled && values.ethnicity.length > 0
      : compusloryFieldsFilled;

    return (
      <Grid container>
        {/* Header */}
        <Header title={"Information about you"} />

        {/* Content */}
        <Grid container className="profileContainer" justify="center">
          <Divider />
          <Grid item xs={12}>
            {/* User Detail Input Instructions */}
            <Typography variant="body1" className="content1">
              <Box fontWeight="fontWeightRegular">
                Before we get started, please provide the following info.
              </Box>
              <Box fontWeight="fontWeightBold">
                Asterisk (*) indicates a compulsory field.
              </Box>
            </Typography>

            {/* Age */}
            <FormControl required className="dropdown">
              <InputLabel>Please select your age</InputLabel>
              <Select
                native
                value={values.age}
                name="age"
                defaultValue={values.age}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {formData.ages.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </Select>
            </FormControl>

            {/* Gender */}
            <FormControl required className="dropdown">
              <InputLabel>Please select your gender</InputLabel>
              <Select
                native
                value={values.gender}
                name="gender"
                defaultValue={values.gender}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {formData.genderTypes.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </Select>
            </FormControl>

            {/* Education */}
            <FormControl required className="dropdown">
              <InputLabel>Please select your level of education</InputLabel>
              <Select
                native
                value={values.education}
                name="education"
                defaultValue={values.education}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {formData.educationLevels.map((education) => (
                  <option key={education} value={education}>
                    {education}
                  </option>
                ))}
              </Select>
            </FormControl>

            {/* Country-of-Birth */}
            <FormControl required className="dropdown">
              <InputLabel>Please select your country of birth</InputLabel>
              <Select
                native
                value={values.countryOfBirth}
                name="countryOfBirth"
                defaultValue={values.countryOfBirth}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {formData.countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </FormControl>

            {/* Ethnicity (Show ethnicity only if Country-of-Residence is Singapore) */}
            {values.countryOfBirth === "Singapore" ? (
              <FormControl required className="dropdown">
                <InputLabel>Please select your ethnic group</InputLabel>
                <Select
                  native
                  value={values.ethnicity}
                  name="ethnicity"
                  defaultValue={values.ethnicity}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  {formData.ethnicities.map((ethnicity) => (
                    <option key={ethnicity} value={ethnicity}>
                      {ethnicity}
                    </option>
                  ))}
                </Select>
              </FormControl>
            ) : null}

            {/* Country-of-Residence */}
            <FormControl required className="dropdown">
              <InputLabel>Please select your country of residence</InputLabel>
              <Select
                native
                value={values.countryOfResidence}
                name="countryOfResidence"
                defaultValue={values.countryOfResidence}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {formData.countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </FormControl>

            {/* Native Speaker? */}
            <FormControl required className="dropdown">
              <InputLabel>Are you a native English speaker?</InputLabel>
              <Select
                native
                value={values.isNative}
                name="isNative"
                defaultValue={values.isNative}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {formData.yesAndNo.map((isNative) => (
                  <option key={isNative} value={isNative}>
                    {isNative}
                  </option>
                ))}
              </Select>
            </FormControl>

            {/* Languages Spoken */}
            <FormControl className="dropdown">
              <InputLabel shrink>What other languages do you speak?</InputLabel>
              <Select
                className="languageMultiSelect"
                native
                multiple
                value={values.languagesSpoken}
                name="languagesSpoken"
                onChange={handleLanguageChange}
              >
                {formData.languagesSpoken.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Continue Button*/}
          <FormButton
            buttonDescription="continue"
            onClick={this.continue}
            disabled={!isEnabled}
          />
        </Grid>
      </Grid>
    );
  }
}

export default UserDetails;
