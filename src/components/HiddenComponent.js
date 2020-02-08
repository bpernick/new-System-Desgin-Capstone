import React, { Component } from "react";
import HiddenImageBar from "./HiddenImageBar";
import HiddenMainImage from "./HiddenMainImage";
import HiddenTitle from "./HiddenTitle";
export default class HiddenComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          visibility: this.props.class,
          product: this.props.product.image
      }
    }

    componentDidMount(){
        this.setState ({
            visibility: this.props.class
        })
    }
    
    render() {
        return (
        
            <div className = {this.props.class}>
                <div className = 'top-row'>
                    <HiddenTitle className = 'hidden-title' name ={this.props.name}/>
                    <button className = 'close' onClick = {this.props.onClick}>X</button>
                </div>
                <HiddenImageBar resetZoom = {this.props.resetZoom} products = {this.props.images} onClick = {this.props.handleSwapImage}/>
                <HiddenMainImage resetZoom = {this.props.resetZoom} zoomIn = {this.props.zoomIn} zoomOut = {this.props.zoomOut} product = {this.props.image} num = {this.props.scale}/>
            </div>
            )
    }
}