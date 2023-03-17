import React from "react";
import { Component } from "react";
import "./styleaddlist.css";

class Addlist extends Component {
  state = {
    check: <input type="checkbox" />,
    para: "",
    btnEdit: "Edit",
    btnDel: "x",
  };
  handleChange = (e) => {
    this.setState({
      para: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.para === "") {
      return;
    } else {
      this.props.addItem(this.state);
      this.setState({
        para: "",
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          onChange={this.handleChange}
          value={this.state.para}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default Addlist;
