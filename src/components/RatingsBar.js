import React from "react";

const RatingsBar = (props) => {
    return (
    <div className = 'ratings-bar'>
        <p>Rating: {props.product.rating} stars  |</p>
        <p>{props.product.rating/5 * 100}% Recommend this product  |</p>
        <p>  Customer QA</p>
    </div>
    )
}
export default RatingsBar;