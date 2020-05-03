import React, { Component } from "react";
import { Game } from "./components/game";

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Game class="container-sm"/>
      </div>
    );
  }
}

export default App;
