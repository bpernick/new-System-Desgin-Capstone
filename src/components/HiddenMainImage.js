import React, { Component } from "react";

export default class HiddenMainImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style : {},
            button: ' translucent-button'
        };
    }
    handleMouseIn(){
        this.setState ({button: ''})
    }

    handleMouseOut(){
        this.setState ({button: ' translucent-button'})
    }

    render () {
        console.log(this.props.product)
        return (
            <div className = 'container'>
                <img style = {{transform: `scale(${this.props.num})`}} className = 'hidden-main-img' src = {this.props.product}></img>
                <div className = {'buttons' + this.state.button} onMouseEnter ={this.handleMouseIn.bind(this)} onMouseLeave ={this.handleMouseOut.bind(this)}>
                    <button className = 'button zoom-in' onClick = {this.props.zoomIn}>+</button>
                    <button className = 'button zoom-out' onClick = {this.props.zoomOut}>-</button>
                    <img className = 'button reset' onClick = {this.props.resetZoom} src = '../images/reset.png'></img>
                </div>
                </div>
        )
    }
}