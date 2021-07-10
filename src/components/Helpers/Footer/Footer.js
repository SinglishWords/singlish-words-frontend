import { Grid, Link, Typography } from "@material-ui/core";
import React, { Component } from "react";
import formData from "../../../utils/formData";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <Grid container className="footer">
        <Grid item xs={12} className="footer_content">
          <Typography variant="body2" className="text footer_top">
            {formData.footer.top}
          </Typography>
          <Typography variant="body2" className="text footer_bottom">
            {formData.footer.bottom}
            <Link
              className="text site_link"
              onClick={() => window.open(formData.footer.url, "_blank")}
            >
              <b>
                <u>{formData.footer.urlstring}</u>
              </b>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
