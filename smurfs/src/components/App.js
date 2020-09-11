import React, { Component } from "react";
import AddSmurfForm from "./AddSmurfForm";
import "./App.css";
import SmurfList from "./SmurfList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="form">
          <AddSmurfForm />
        </div>
        <div className="list">
          <SmurfList />
        </div>
      </div>
    );
  }
}

export default App;
