import React, { Component } from "react";
import HiddenImageBar from "./HiddenImageBar";
import HiddenMainImage from "./HiddenMainImage";
import HiddenTitle from "./HiddenTitle";
export default class HiddenComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          visibility: this.props.class,
          product: ''
      }
    }
    // findOtherPics (){
    //     let answer = [];
    //     this.props.products.forEach((product)=>{
    //         if (product.name === this.props.product.name){
    //             answer.push(product.image)
    //         }
    //     })
    //     this.setState({products: answer})
    // }
    componentDidMount(){
        this.setState ({
            visibility: this.props.class,
            product: this.props.product.image
        })
    }
    handleSwapImage(event){
        this.setState ({
            product: event.target.name
        })
        this.props.resetZoom()
    }
    
    render() {
        console.log(this.props.scale)
        return (
        <div className = {this.props.class}>
            <div className = 'top-row'>
                <HiddenTitle className = 'hidden-title' name ={this.props.name}/>
                <button className = 'close' onClick = {this.props.onClick}>X</button>
            </div>
            <HiddenImageBar resetZoom = {this.props.resetZoom} products = {this.props.images} product = {this.state.product} onClick = {this.handleSwapImage.bind(this)}/>
            <HiddenMainImage resetZoom = {this.props.resetZoom} zoomIn = {this.props.zoomIn} zoomOut = {this.props.zoomOut} product = {this.state.product} num = {this.props.scale}/>
        </div>
            )
    }
}