import React, { Component } from "react";


export default class HiddenMainImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        console.log(this.props.product)
        return (
            <img className = 'hidden-main-img' src = {this.props.product.image}></img>
        )
    }
}