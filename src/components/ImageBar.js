import React, { Component } from "react";
import ImageBarImages from "./ImageBarImages.js";


export default class ImageBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        console.log(this.props.products)
        return (
        <div className = 'image-bar' >{this.props.images.map( (image, i) => {
            return(<img onClick = {this.props.onClick} className = 'bar-img' key = {i} src = {image}></img>)
        })}</div>
        )
    }
}