import React from "react";
import StarRatings from 'react-star-ratings';

const Rating = (props) => {
    return (
    <div className = 'rating'>
        <p className = 'blue-text'>87 Ratings</p>
        <StarRatings
          rating={props.rating}
          starDimension = '25px'
          starSpacing = '0px'
          starRatedColor= 'rgb(3, 81, 125)'
          numberOfStars={5}
          name='star-rating'
        />
        <p className = 'text-rating'>{props.rating} Average</p>
    </div>
    )
}
export default Rating;