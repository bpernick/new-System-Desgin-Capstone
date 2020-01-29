import React, { Component } from "react";
// Create fake model # copied from https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
const hashProductName = function(string) {
    var hash = 0;
    if (string.length == 0) {
        return hash;
    }
    for (var i = 0; i < string.length; i++) {
        var char = string.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const Ids = (props) => {
    return (
        <div className = 'ids'>
            <p> Item # {props.product.id}</p>
    <p> Model # {hashProductName(props.product.name)}</p>
        </div>
    )
}

export default Ids;