import React, { Component } from "react";
import HiddenImageBar from "./HiddenImageBar";
import HiddenMainImage from "./HiddenMainImage";

export default class HiddenComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          product: '',

      }
    }
    findOtherPics (){
        answer = [];
        this.props.products.forEach((product)=>{
            if (product.name === this.props.product){
                answer.push(product.image)
            }
        })
        return answer;
    }
    componentDidMount(){
        this.setState ({
            visibility: this.props.class,
            product: this.props.product.image,
            products: this.findOtherPics()
        })
    }
    render() {
        console.log(this.state.product)
        return (
            
            <div className = {this.state.visibility}>
            <HiddenImageBar products = {this.state.products} product = {this.state.product}/>
            <HiddenMainImage product = {this.state.product}/>
        </div>
            )
    }
}