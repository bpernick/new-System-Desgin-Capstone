import React from "react";

const RatingsBar = (props) => {
    return (
    <div>
        <p>Rating: {props.product.rating} stars</p>
        <p>{props.product.rating/5 * 100}% of customers liked this product</p>
        <p>Customer QA</p>
    </div>
    )
}
export default RatingsBar;