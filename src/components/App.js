import React, { Component } from "react";
import axios from 'axios';
import Title from './Title.js';
import RatingsBar from "./ImageBarImages.js";
import ImageBar from './ImageBar.js';
import MainImage from './MainImage.js';
import HiddenComponent from './HiddenComponent.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products : [],
      currentProduct: ''
    };
  }
  componentDidMount() {
    axios.get('/images')
    .then( (data) => {
      console.log(data)
      this.setState({
        products : data.data,
        currentProduct: data.data[0].name
      })
    })
  }
  render() {
    return (
      <div>
        <Title name = {this.state.currentProduct}/>
        <MainImage products = {this.state.products}/>
        <ImageBar products = {this.state.products} name = {this.state.currentProduct}/>
      </div>
    );
  }
}
