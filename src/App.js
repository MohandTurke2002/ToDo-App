// eslint-disable-next-line no-unused-vars
import React, { createElement } from "react";
import { Component } from "react";
import Addlist from "./Component/Addlist/addlist";
import Showlist from "./Component/Showlist/showlist";
import "./styleapp.css";

class App extends Component {
  state = {
    list: [
      {
        id: Math.random(),
        para: "do my work",
        btnEdit: "Edit",
        btnDel: "x",
      },
    ],
  };
  handleDelet = (e) => {
    let parent = e.target.closest(".showlist");
    parent.remove();
    let listParent = document.querySelector(".Listparent");
    if (!listParent.childNodes.length) {
      let list = this.state.list;
      list.forEach((item) => {
        list.splice(item);
        this.setState({ list });
      });
    }
  };
  handleUpdate = (index, value) => {
    let list = this.state.list;
    let item = list[index];
    item["para"] = value;
    this.setState({ list });
  };
  addItem = (item) => {
    item.id = Math.random();
    let list = this.state.list;
    list.push(item);
    this.setState({ list });
  };
  render() {
    const { list } = this.state;
    let myData = list.map((data, index) => {
      return (
        <Showlist
          details={data}
          myData={this.state.list}
          delet={this.handleDelet}
          key={data.id}
          id={Math.random()}
          index={index}
          editItem={this.handleUpdate}
        />
      );
    });
    let length = this.state.list.length;
    if (length) {
      return (
        <div className="App">
          <>
            <Addlist addItem={this.addItem} />
            <ul className="Listparent">{myData}</ul>
          </>
        </div>
      );
    } else {
      return (
        <div className="App">
          <>
            <Addlist addItem={this.addItem} />
            <p className="para">No Items ToDo It...</p>
          </>
        </div>
      );
    }
  }
}

export default App;
