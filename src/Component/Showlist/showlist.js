/* eslint-disable no-unused-vars */
import React from "react";
import { Component } from "react";
import "./stylesshowlist.css";

class Showlist extends Component {
  addCheckToPara = (para) => {
    if (para.target.id) {
      para.target.classList.toggle("check");
      para.target.classList.contains("check")
        ? para.target.childNodes[0].setAttribute("checked", "")
        : para.target.childNodes[0].removeAttribute("checked");
    }
  };
  state = {
    isEdit: false,
  };
  edit = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };
  update = (e) => {
    e.preventDefault();
    this.props.editItem(this.props.index, this.input.value);
    this.edit();
  };
  renderEdit = () => {
    return (
      <form onSubmit={this.update}>
        <input
          className="input"
          type="text"
          defaultValue={this.props.details.para}
          ref={(v) => {
            this.input = v;
          }}
        />
        <button>Update</button>
      </form>
    );
  };
  renderShowList = () => {
    return (
      <li className="showlist" id={this.props.id}>
        <div
          className="item"
          onClick={(e) => this.addCheckToPara(e)}
          id={this.props.id}
        >
          <input type="checkbox" />
          <p>{this.props.details.para}</p>
        </div>
        <button onClick={() => this.edit()}>
          {this.props.details.btnEdit}
        </button>
        <button onClick={(e) => this.props.delet(e)}>
          {this.props.details.btnDel}
        </button>
      </li>
    );
  };
  render() {
    let { isEdit } = this.state;
    return <>{isEdit ? this.renderEdit() : this.renderShowList()}</>;
  }
}

export default Showlist;
