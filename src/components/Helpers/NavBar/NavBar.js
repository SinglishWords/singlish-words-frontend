import React, { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Typography,
  Menu,
  Grid,
  MenuItem,
} from "@mui/material";

export class NavBar extends Component {
  state = {
    anchorElNav: null,
  };

  handleOpenNavMenu = (e) => {
    e.preventDefault();
    this.setState({ anchorElNav: e.currentTarget });
  };

  handleCloseNavMenu = (e) => {
    e.preventDefault();
    this.setState({ anchorElNav: null });
  };

  render() {
    const pages = ["Participate", "Explore", "Visualise"];
    const open = Boolean(this.state.anchorElNav);

    return (
      <AppBar position="static" className="appbar">
        <Grid container className="container">
          <Toolbar variant="dense" className="toolbar">
            {/* Side Navigation Panel */}
            <Box className="side_nav_panel">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleOpenNavMenu}
                color="inherit"
                className="icon_button"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={open}
                onClose={this.handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={this.handleCloseNavMenu}
                    className="menu_item"
                  >
                    <Typography textAlign="center">
                      <Link to={page === "Home" ? "/" : `/${page}`}>
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* App Navigation Bar */}
            <Box className="default_header">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={this.handleCloseNavMenu}
                  className="button"
                >
                  <Link to={page === "Home" ? "/" : `/${page}`}>{page}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Grid>
      </AppBar>
    );
  }
}

export default NavBar;
