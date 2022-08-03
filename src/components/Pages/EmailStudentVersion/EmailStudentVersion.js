import { Grid, Link, Typography } from "@mui/material";
import React, { Component } from "react";
import axiosConfig, { answersUrl } from "../../../utils/Api/axiosConfig";
import appData from "../../../utils/appData";
import { copyToClipboard } from "../../../utils/Logic/copyUtil";
import Footer from "../../Helpers/Footer/Footer";
import FormButton from "../../Helpers/FormButton/FormButton";
import Header from "../../Helpers/Header/Header";
import "./EmailStudentVersion.css";

export class Email extends Component {
  constructor(props) {
    super(props);
    this.state = { isCopied: false };
  }
  /* Submit quiz answers */
  componentDidMount() {
    let formStateCopy = JSON.parse(JSON.stringify(this.props.formState));
    delete formStateCopy["step"];
    let answers = JSON.stringify(formStateCopy);

    console.log("Initiated POST request to server with the following payload:");
    console.log(answers);
    axiosConfig
      .post(answersUrl, answers)
      .then((response) => {
        console.log("Server Response");
        console.log(response);
        if (response.status === 201) {
          alert("Responses submitted successfully!");
        } else {
          alert(
            "Something went wrong in responses submission. Responses were submitted but status code returned is wrong. Please contact the project team at singlishwords@nus.edu.sg."
          );
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Error! Responses submission failed. Please contact the project team at singlishwords@nus.edu.sg.`
        );
      });

    /* Clear local storage */
    this.props.removeStateFromLocalStorage();
  }

  render() {
    const uuid = this.props.formState.uuid;
    const isCopied = this.state.isCopied;
    return (
      <Grid container>
        {/* Thank you header*/}
        <Header title={appData.emailPageStudent.title} />

        <Grid container className="email_container" justify="center">
          {/* Paragraph 1 - What we are trying to do */}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {appData.emailPageStudent.firstParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {appData.emailPageStudent.firstParagraphDescription}
              </Typography>
            </Grid>
          </Grid>

          {/* Paragraph 2 - If you would like to take part in the lucky draw or receive updates about this research */}
          <Grid item xs={12} className="receive_updates_lucky_draw_header">
            <Typography variant="h4" id="content">
              {appData.emailPageStudent.secondParagraphHeader}
            </Typography>
          </Grid>

          <Grid item xs={12} className="content_grid">
            <Typography variant="body1" className="text">
              {appData.emailPageStudent.secondParagraphDescription.description1}
              <Link
                className="site_link"
                onClick={() =>
                  window.open("mailto:singlishwords@nus.edu.sg", "_blank")
                }
              >
                <b>
                  <u>
                    {appData.emailPageStudent.secondParagraphDescription.email}
                  </u>
                </b>
              </Link>
              {appData.emailPageStudent.secondParagraphDescription.description2}
            </Typography>
            <br />

            <Typography variant="body1" className="text code_text">
              <b>
                {appData.emailPageStudent.secondParagraphDescription.enterCode}
              </b>
            </Typography>

            <Grid item xs={12} className="uuid_container">
              <Grid item xs={10}>
                <Typography variant="body1" className="text">
                  <b>{uuid}</b>
                </Typography>
              </Grid>
              {isCopied ? (
                <Grid item xs={2} className="copy_button copied">
                  <FormButton
                    buttonDescription={"Copied"}
                    onClick={() => {
                      copyToClipboard(uuid);
                    }}
                  />
                </Grid>
              ) : (
                <Grid item xs={2} className="copy_button">
                  <FormButton
                    buttonDescription={"Copy"}
                    onClick={() => {
                      copyToClipboard(uuid);
                      this.setState({ isCopied: true });
                    }}
                  />
                </Grid>
              )}
            </Grid>

            <Typography variant="body1" className="text">
              {appData.emailPageStudent.secondParagraphDescription.description3}
            </Typography>
          </Grid>

          {/* Paragraph 4 - Get in touch*/}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {appData.emailPage.fourthParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {appData.emailPage.fourthParagraphDescription.description1}
              </Typography>
              <Typography variant="body1" className="text">
                <Link
                  className="site_link"
                  onClick={() =>
                    window.open(
                      "mailto:smallworldofsinglishwords@gmail.com",
                      "_blank"
                    )
                  }
                >
                  <b>
                    <u>{appData.emailPage.fourthParagraphDescription.email}</u>
                  </b>
                </Link>
              </Typography>
              <br />
              <br />
              <Typography variant="body1" className="text" display="inline">
                <b>
                  {appData.emailPage.fourthParagraphDescription.description2}
                </b>
              </Typography>
              <Typography variant="body1" className="text" display="inline">
                <Link
                  className="site_link"
                  onClick={() =>
                    window.open("mailto:cynthia@nus.edu.sg", "_blank")
                  }
                >
                  <b>
                    <u>{appData.emailPage.fourthParagraphDescription.email2}</u>
                  </b>
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {/* Paragraph 5 - Share the study*/}
          <Grid item xs={12}>
            <Typography variant="h4" id="content">
              {appData.emailPage.fifthParagraphHeader}
            </Typography>
            <Grid item xs={12} className="content_grid">
              <Typography variant="body1" className="text">
                {appData.emailPage.fifthParagraphDescription}
                <Link
                  className="site_link"
                  onClick={() => window.open("/", "_blank")}
                >
                  <b>
                    <u>{window.location.host}</u>
                  </b>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default Email;
