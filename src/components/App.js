import React, { Component } from "react";
import Title from './Title.js';
import ImageBar from './ImageBar.js';
import MainImage from './MainImage.js';
import HiddenComponent from './HiddenComponent.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
