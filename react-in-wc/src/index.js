import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class AppWrap extends HTMLElement {
  connectedCallback() {
    console.log("ReactApp connected");
    this.render();
  }

  render() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define("app-wrap", AppWrap);
