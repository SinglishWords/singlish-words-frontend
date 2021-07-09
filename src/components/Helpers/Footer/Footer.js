import React, { Component } from "react";
import "./Footer.css";
import { Link, Grid, Typography } from "@material-ui/core";

export class Footer extends Component {
  render() {
    return (
      <Grid container className="footer">
        <Grid item xs={12} className="footer_content">
          <Typography variant="body2" className="text footer_top">
            This project was inspired by the Small World of Words project. We
            thank the creators for giving us permission to expand this work into
            the words that make up the Singaporean lexicon.
          </Typography>
          <Typography variant="body2" className="text footer_bottom">
            Small World of Words - 
            <Link
              className="text site_link"
              onClick={()=> window.open("https://smallworldofwords.org/", "_blank")}
            >
              <b>
                <u> https://smallworldofwords.org/</u>
              </b>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
