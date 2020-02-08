import React, { Component } from "react";

const style = {
    //transform: 'scale(1.5)'
}
export default class HiddenMainImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style : {},
            button: ' translucent-button'
        };
    }
    componentDidMount (){
        this.setState ({
            style : {transform: `scale(${this.props.num})`}
        })
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
                    <button className = 'button reset' onClick = {this.props.resetZoom}></button>
                </div>
                </div>
        )
    }
}