import React, { Component } from "react";
import axios from 'axios';
import Ids from './Ids.js';
import Title from './Title.js';
import RatingsBar from "./RatingsBar.js";
import ImageBar from './ImageBar.js';
import MainImage from './MainImage.js';
import './style.scss';
import HiddenComponent from './HiddenComponent.js';
const baseURL = '18.219.77.204';
// const baseURL =' http://localhost:3005/';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products : [],
      currentProduct: '',
      currentImage:'',
      HiddenComponentClass: 'hide',
      scale: 1,
      search: 61
    };
  }

  getImages() {
    axios.get('/images', {params: {id: this.state.search}})
    .then( (data) => {
      console.log(data.data)
      this.setState({
        products : data.data,
        currentProduct: data.data[0],
        images: data.data[0].image_urls,
        currentImage: data.data[0].image_urls[0]
      })
    })
  }

  componentDidMount() {
    window.addEventListener('jordanAwesome', (e)=>{
      this.setState({search: e.detail}, this.getImages)
    })
    this.getImages();
  }

  handleSwapImage(event){
    this.setState ({
        currentImage: event.target.name,
        scale: 1
    })
}

  handleShowComponent(){
    if(document.getElementById('modal-backdrop')){
      document.getElementById('modal-backdrop').classList.add('grey')
    }
    this.setState({
      HiddenComponentClass: 'show-hidden',
    })
  }
    

  handleCloseComponent(){
    if(document.getElementById('modal-backdrop')){
      document.getElementById('modal-backdrop').classList.remove('grey')
    }
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
  resetZoom (){
    this.setState({scale : 1})
  }
  render() {
    return (
      <div className = 'bensApp'>
        <div className = 'text'>
        {this.state.currentProduct && <Ids product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <Title product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <RatingsBar product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <HiddenComponent scale = {this.state.scale} handleSwapImage = {this.handleSwapImage.bind(this)} zoomIn = {this.handleZoomIn.bind(this)} zoomOut = {this.handleZoomOut.bind(this)}  onClick = {this.handleCloseComponent.bind(this)} class ={this.state.HiddenComponentClass} products = {this.state.products} product = {this.state.currentProduct} images = {this.state.images} image = {this.state.currentImage} resetZoom = {this.resetZoom.bind(this)} name = {this.state.currentProduct.name}/>}
          </div>
        <div className = 'images'>
          { this.state.currentProduct && <ImageBar onClick = {this.handleShowComponent.bind(this)} images = {this.state.images} product = {this.state.currentProduct}/>}
          {this.state.currentProduct && <MainImage onClick = {this.handleShowComponent.bind(this)} product = {this.state.currentProduct}/>}
        </div>
        </div>
    );
  }
}
