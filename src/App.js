import React, { Component } from "react";
import Form from "./components/Form";
import "./App.css";
import NavBar from "./components/Helpers/NavBar/NavBar";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Form />
      </div>
    );
  }
}

export default App;
