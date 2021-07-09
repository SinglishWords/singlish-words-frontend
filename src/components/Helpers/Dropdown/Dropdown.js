import { FormControl, InputLabel, Select } from "@material-ui/core";
import React, { Component } from "react";
import "./Dropdown.css";

export class Dropdown extends Component {
  render() {
    return (
      <FormControl
        required={this.props.name === "languagesSpoken" ? false : true}
        id="dropdown"
      >
        <InputLabel>{this.props.inputLabel}</InputLabel>
        <Select
          native
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
        >
          <option aria-label="None" value="" />
          {this.props.name === "age"
            ? this.props.listData.map((age) => {
                if (age < 18) {
                  return (
                    <option key={age} value={age}>
                      {"Less Than 18"}
                    </option>
                  );
                } else if (age > 80) {
                  return (
                    <option key={age} value={age}>
                      {"More Than 80"}
                    </option>
                  );
                } else {
                  return (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  );
                }
              })
            : this.props.listData.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
        </Select>
      </FormControl>
    );
  }
}

export default Dropdown;
