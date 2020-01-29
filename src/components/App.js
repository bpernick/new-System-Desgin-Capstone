import React, { Component } from "react";
import axios from 'axios';
import Title from './Title.js';
import RatingsBar from "./RatingsBar.js";
import ImageBar from './ImageBar.js';
import MainImage from './MainImage.js';
import './style.scss';
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
        currentProduct: data.data[0]
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.currentProduct && <Title className = 'ben' product = {this.state.currentProduct}/>}
        {this.state.currentProduct && <RatingsBar className = 'ben' product = {this.state.currentProduct}/>}
        <div className = 'images'>
          { this.state.currentProduct && <ImageBar className = 'ben' products = {this.state.products} product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <MainImage className = 'ben' product = {this.state.currentProduct}/>}
        </div>
      </div>
    );
  }
}
