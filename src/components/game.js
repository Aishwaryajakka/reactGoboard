import React, { Component } from "react";
import { Board } from "./board";
import "./game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(361).fill(null)
        }
      ],
      isNext: true,
      stepNumber: 0,
      black: 0,
      white: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] == "●") {
      squares[i] = null;
      this.setState({
        black: this.state.black + 1,
        history: history.concat([{ squares: squares }]),
        stepNumber: history.length
      });
    } else if (squares[i] == "○") {
      squares[i] = null;
      this.setState({
        white: this.state.white + 1,
        history: history.concat([{ squares: squares }]),
        stepNumber: history.length
      });
    } else {
      squares[i] = this.state.isNext ? "●" : "○";
      this.setState({
        history: history.concat([{ squares: squares }]),
        stepNumber: history.length,
        isNext: !this.state.isNext
      });
    }
  }

  pass() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    this.setState({
      history: history.concat([{ squares: squares }]),
      isNext: !this.state.isNext,
      stepNumber: this.state.stepNumber + 1
    });
  }

  undo() {
    if (this.state.stepNumber < 1) return;
    const nextStone = this.state.isNext ? "●" : "○";
    const black = this.state.black;
    const white = this.state.white;
    if (nextStone == "○") {
      if (black >= 1) {
        this.setState({ black: this.state.black - 1 });
      } else {
        this.setState({ black: 0 });
      }
    } else if (nextStone == "●") {
      if (white >= 1) {
        this.setState({ white: this.state.white - 1 });
      } else {
        this.setState({ white: 0 });
      }
    }
    this.setState({
      stepNumber: this.state.stepNumber - 1,
      isNext: !this.state.isNext
    });
  }

  reset() {
    this.setState({
      history: [
        {
          squares: Array(361).fill(null)
        }
      ],
      isNext: true,
      stepNumber: 0,
      black: 0,
      white: 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    var status = "Next Player : " + (this.state.isNext ? "●" : "○");
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info col jumbotron">
          <div class="row">
            <div class="container">
              <h1 class="display-4">Welcome to Go</h1>
              <p class="lead">
                This is a 19x19 square and a 2-player game. Actual rules of Go
                are not implemented. <br />
              </p>
              <p>
                <ul class="list-group">
                  <li class="list-group-item">
                    Click on the interection of the square to place the stone
                  </li>
                  <li class="list-group-item">
                    {" "}
                    Click on <b>PASS</b> to skip turn
                  </li>
                  <li class="list-group-item">
                    Click on <b>UNDO</b> to reverse the move
                  </li>
                  <li class="list-group-item">
                    Click on the resepective placed stones to Remove it. The
                    number of stones(Black/White) removed is displayed below
                  </li>
                  <li class="list-group-item">
                    Click on <b>RESET</b> to basically restart the game
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div class="row">{status}</div>
          <div class="row">Number of Removed ● stones : {this.state.black}</div>
          <div class="row">Number of Removed ○ stones : {this.state.white}</div>
          <div className="col">
            <button class="row btn btn-primary" onClick={() => this.pass()}>
              Pass
            </button>
            <button class="row btn btn-warning" onClick={() => this.undo()}>
              Undo
            </button>
            <button class="row btn btn-danger" onClick={() => this.reset()}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { Game };
