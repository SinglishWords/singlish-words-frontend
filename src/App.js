import React, { Component } from "react";
import Form from "./components/Form";
import Visualise from "./components/Pages/Visualise/Visualise";
import Explore from "./components/Pages/Explore/Explore";
import "./App.css";
import { Grid } from "@mui/material";

import { Route, Routes } from "react-router";

export class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Routes>
          <Route path="/Participate" element={<Form />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="Visualise" element={<Visualise />} />
          <Route path="/" element={<Form />} />
        </Routes>
      </Grid>
    );
  }
}

export default App;
