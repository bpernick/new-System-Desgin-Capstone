import React, { Component } from "react";


export default class MainImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className = 'main-image-container'><img onClick = {this.props.onClick} className = 'main-img' src = {this.props.product.image}></img></div>
        )
    }
}