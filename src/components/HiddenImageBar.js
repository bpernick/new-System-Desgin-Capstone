import React, { Component } from "react";
import ImageBarImages from "./ImageBarImages.js";


export default class HiddenImageBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
        <div className = 'hidden-image-bar' >{this.props.products.map( (product, i) => {
            if (product.name === this.props.product.name){
            return(<img className = 'hidden-bar-img' key = {i} src = {product.image}></img>)
            }
        })}</div>
        )
    }
}