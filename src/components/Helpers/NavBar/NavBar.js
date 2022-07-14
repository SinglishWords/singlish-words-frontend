import React from "react";
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

const pages = ["Participate", "Explore", "Visualise"];

/* Taken directly from MaterialUI API. */
export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} className="menu_item">
                  <Typography textAlign="center">
                    <Link to={page === "Home" ? "/" : `/${page}`}>{page}</Link>
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
                onClick={handleCloseNavMenu}
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
