import React, { Component } from "react";

const HiddenTitle = (props) => {
    return (
        <h3 className ='hidden-title'>{props.name}</h3>
    )
}

export default HiddenTitle;