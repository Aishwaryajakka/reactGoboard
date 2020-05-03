import React, { Component } from "react";
import "./square.css";

function Square(props) {
  return (
    <div className="square">
      <button className="intersection" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}

export { Square };
