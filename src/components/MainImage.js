import React, { Component } from "react";


export default class MainImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <img src = {this.props.product.image}></img>
        )
    }
}