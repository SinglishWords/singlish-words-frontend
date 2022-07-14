import { FormControl, InputLabel, Select } from "@mui/material";
import React, { Component } from "react";
import "./Dropdown.css";

export class Dropdown extends Component {
  render() {
    return (
      <FormControl
        /* The 'required' props decides whether an asterisk (*) will appear in the inputLabel.
        If the field is languagesSpoken, then it is not compulsory. Hence no asterisk required in inputLabel.
        The input label and the associated asterisk should both disappear once a value is input into the field
        If the inputLabel is blank, then it suggests that there is already a value input into the field.
        Hence, we check for this.props.inputLabel === "" and remove the asterisk if its true */
        required={
          this.props.name === "languagesSpoken" || this.props.inputLabel === ""
            ? false
            : true
        }
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
