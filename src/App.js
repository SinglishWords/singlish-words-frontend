import React, { Component } from "react";
import Form from "./components/Form";
import Visualise from "./components/Pages/Visualise/Visualise";
import Explore from "./components/Pages/Explore/Explore";
import "./App.css";
import NavBar from "./components/Helpers/NavBar/NavBar";
import { Route, Routes } from "react-router";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="Explore" element={<Explore />} />
          <Route path="Visualise" element={<Visualise />} />
          <Route path="/" element={<Form />} />
        </Routes>
      </div>
    );
  }
}

export default App;
