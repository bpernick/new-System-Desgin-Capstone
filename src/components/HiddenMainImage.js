import React, { Component } from "react";

const style = {
    //transform: 'scale(1.5)'
}
export default class HiddenMainImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style : {}
        };
    }
    componentDidMount (){
        this.setState ({
            style : {transform: `scale(${this.props.num})`}
        })
    }
    render () {
        console.log(this.state.style)
        return (
            <img style = {this.state.style} className = 'hidden-main-img' src = {this.props.product}></img>
        )
    }
}