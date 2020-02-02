import React from "react";
import Rating from './Rating.js';

const RatingsBar = (props) => {
    return (
        <div className = 'ratings-bar'>
            <Rating rating = {props.product.rating}/>
            <p className = 'recomendations'><span className = 'big'>{props.product.rating/5 * 100}%</span>Recommend this product </p>
            <div className = 'qa'>
                <img className = 'qaicon' src = "../images/qaicon.png"></img>
                <p className = 'qatxt'> Community QA</p>
                <p className = 'blue-text qatxt'>View Now</p>
            </div>
        </div>
    
    )
}
export default RatingsBar;