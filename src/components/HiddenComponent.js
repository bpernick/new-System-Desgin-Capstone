import React, { Component } from "react";
import HiddenImageBar from "./HiddenImageBar";
import HiddenMainImage from "./HiddenMainImage";

export default class HiddenComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          visibility: this.props.class,
          product: '',
          currentPic: ''
      }
    }
    componentDidMount(){
        this.setState ({
            product: this.props.product,
            currentPic: ''
        })
    }
    render() {
        console.log(this.state.product)
        return (
            
            <div className = {this.state.visibility}>
            <HiddenImageBar products = {this.props.products} product = {this.state.product}/>
            <HiddenMainImage product = {this.state.product}/>
        </div>
            )
    }
}