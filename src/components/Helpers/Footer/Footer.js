import { Grid, Link, Typography } from "@mui/material";
import React, { Component } from "react";
import appData from "../../../utils/appData";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <Grid container className="footer">
        <Grid item xs={12} className="footer_content">
          <Typography variant="body2" className="text footer_top">
            {appData.footer.top}
          </Typography>
          <Typography variant="body2" className="text footer_bottom">
            {appData.footer.bottom}
            <Link
              className="text site_link"
              onClick={() => window.open(appData.footer.url, "_blank")}
            >
              <b>
                <u>{appData.footer.urlstring}</u>
              </b>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
