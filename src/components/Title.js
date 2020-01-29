import React, { Component } from "react";

const Title = (props) => {
    return (
        <h2 className ='title'>{props.product.name}</h2>
    )
}

export default Title;