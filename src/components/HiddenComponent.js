import React, { Component } from "react";
import HiddenImageBar from "./HiddenImageBar";
import HiddenMainImage from "./HiddenMainImage";

export default class HiddenComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          visibility: this.props.class,
          product: ''
      }
    }
    findOtherPics (){
        let answer = [];
        this.props.products.forEach((product)=>{
            if (product.name === this.props.product.name){
                answer.push(product.image)
            }
        })
        this.setState({products: answer})
    }
    componentDidMount(){
        this.findOtherPics()
        this.setState ({
            visibility: this.props.class,
            product: this.props.product.image,
        })
    }
    handleSwapImage(event){
        this.setState ({
            product: event.target.name
        })
    }
    render() {
        console.log(this.state.product)
        return (
            
            <div className = {this.state.visibility}>
            {this.state.products && <HiddenImageBar products = {this.state.products} product = {this.state.product} onClick = {this.handleSwapImage.bind(this)}/>}
            <HiddenMainImage product = {this.state.product}/>
        </div>
            )
    }
}