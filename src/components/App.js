import React, { Component } from "react";
import axios from 'axios';
import Ids from './Ids.js';
import Title from './Title.js';
import RatingsBar from "./RatingsBar.js";
import ImageBar from './ImageBar.js';
import MainImage from './MainImage.js';
import './style.scss';
import HiddenComponent from './HiddenComponent.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products : [],
      currentProduct: '',
      HiddenComponentClass: 'hide',
      scale: 1
    };
  }
  findOtherPics (data, product){
    let answer = [];
    data.forEach((datum)=>{
        if (datum.name === product.name){
            answer.push(datum.image)
        }
    })
    return answer;
}

  componentDidMount() {
    axios.get('/images')
    .then( (data) => {
      this.setState({
        products : data.data,
        currentProduct: data.data[212],
        images: this.findOtherPics(data.data, data.data[212])
      })
    })
  }

  handleShowComponent(){
    this.setState({
      HiddenComponentClass: 'show-hidden'
    })
  }
  handleCloseComponent(){
    this.setState({
      HiddenComponentClass: 'hide',
      scale: 1
    })
  }
  handleZoomIn () {
    console.log('in!')
    this.setState({
      scale: this.state.scale + 0.1
    })
  }

  handleZoomOut () {
    console.log('out!')
    if (this.state.scale >= 0.8){
      this.setState({
          scale: this.state.scale - 0.1
      })
    }
  }
  render() {
    console.log(this.state.images)
    return (
      <div>
        <div className = 'text'>
        {this.state.currentProduct && <Ids product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <Title product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <RatingsBar product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <HiddenComponent scale = {this.state.scale} zoomIn = {this.handleZoomIn.bind(this)} zoomOut = {this.handleZoomOut.bind(this)}  onClick = {this.handleCloseComponent.bind(this)} class ={this.state.HiddenComponentClass} products = {this.state.products} product = {this.state.currentProduct} images = {this.state.images} name = {this.state.currentProduct.name}/>}
          </div>
        <div className = 'images'>
          { this.state.currentProduct && <ImageBar onClick = {this.handleShowComponent.bind(this)} products = {this.state.products} product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <MainImage onClick = {this.handleShowComponent.bind(this)} product = {this.state.currentProduct}/>}
        </div>
      </div>
    );
  }
}
