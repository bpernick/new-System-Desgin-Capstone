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
            return(<img className = 'hidden-bar-img' name = {product} key = {i} src = {product} onClick={this.props.onClick}></img>)
        })}</div>
        )
    }
}