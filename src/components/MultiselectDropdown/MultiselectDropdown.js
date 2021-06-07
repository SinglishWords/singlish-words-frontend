import { FormControl, InputLabel, Select } from "@material-ui/core";
import React, { Component } from "react";
import "./MultiselectDropdown.css";

export class MultiselectDropdown extends Component {
  render() {
    return (
      <FormControl className="dropdown">
        <InputLabel shrink>{this.props.inputLabel}</InputLabel>
        <Select
          className="languageMultiSelect"
          native
          multiple
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
        >
          {this.props.listData.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default MultiselectDropdown;
