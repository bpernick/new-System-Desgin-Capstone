import React, { Component } from "react";


export default class MainImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        //This is a temporary way of always selecting the image for products at [0] (React did not like props.products[0].image)
        return (
            <div>{this.props.products.map( (product, i) => {
                if (i === 0){
                return(<img key = {i} src = {product.image}></img>)
                }
            })}</div>
        )
    }
}