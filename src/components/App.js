import React, { Component } from "react";
import axios from 'axios';
import Ids from './Ids.js';
import Title from './Title.js';
import RatingsBar from "./RatingsBar.js";
import ImageBar from './ImageBar.js';
import MainImage from './MainImage.js';
import './style.scss';
import HiddenComponent from './HiddenComponent.js';
const baseURL = 'http://newphoto2.us-east-2.elasticbeanstalk.com/';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products : [],
      currentProduct: '',
      HiddenComponentClass: 'hide',
      scale: 1,
      search: 87
    };
  }
  findOtherPics (data){
    let answer = [];
    data.forEach((datum)=>{
        answer.push(datum.image)
    })
    return answer;
}

  componentDidMount() {
    window.addEventListener('search', (e)=>{
      this.setState({search:e.target.search}).bind(this)
    })
  
    axios.get('/images', {baseURL})
    //axios.get('/images')
    .then( (data) => {
      console.log(data.data[10])
      this.setState({
        products : data.data,
        currentProduct: data.data[this.state.search][0],
        images: this.findOtherPics(data.data[this.state.search])
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
    this.setState({
      scale: this.state.scale + 0.1
    })
  }

  handleZoomOut () {
    if (this.state.scale >= 0.8){
      this.setState({
          scale: this.state.scale - 0.1
      })
    }
  }
  resetZoom(){
    this.setState({
      scale: 1
    })
  }
  render() {
    return (
      <div>
        <div className = 'text'>
        {this.state.currentProduct && <Ids product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <Title product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <RatingsBar product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <HiddenComponent scale = {this.state.scale} resetZoom = {this.resetZoom.bind(this)} zoomIn = {this.handleZoomIn.bind(this)} zoomOut = {this.handleZoomOut.bind(this)}  onClick = {this.handleCloseComponent.bind(this)} class ={this.state.HiddenComponentClass} products = {this.state.products} product = {this.state.currentProduct} images = {this.state.images} name = {this.state.currentProduct.name}/>}
          </div>
        <div className = 'images'>
          { this.state.currentProduct && <ImageBar onClick = {this.handleShowComponent.bind(this)} images = {this.state.images} product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <MainImage onClick = {this.handleShowComponent.bind(this)} product = {this.state.currentProduct}/>}
        </div>
      </div>
    );
  }
}
