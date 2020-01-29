import React, { Component } from "react";
import ImageBarImages from "./ImageBarImages.js";


export default class ImageBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        
        return (
        <div>{this.props.products.map( (product, i) => {
            if (product.name === this.props.name){
            return(<img key = {i} src = {product.image}></img>)
            }
        })}</div>
        )
    }
}