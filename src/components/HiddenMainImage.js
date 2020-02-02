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
        console.log(this.props.num)
        return (
            <div className = 'container'>
                <img style = {{transform: `scale(${this.props.num})`}} className = 'hidden-main-img' src = {this.props.product}></img>
                <div className = 'buttons'>
                    <button className = 'button' onClick = {this.props.zoomIn}>+</button>
                    <button className = 'button' onClick = {this.props.zoomOut}>-</button>
                    <button className = 'button' onClick = {this.props.resetZoom}>foo</button>
                </div>
                </div>
        )
    }
}