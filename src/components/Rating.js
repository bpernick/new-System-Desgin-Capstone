import React from "react";
import StarRatings from 'react-star-ratings';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Rating = (props) => {
    return (
    <div className = 'rating'>
        <p className = 'blue-text'>87 Ratings</p>
        <StarRatingComponent
          name = 'hammer-rating'
          value = {props.rating}
          renderStarIcon= {() => <span id="icon"><FontAwesomeIcon icon="gavel" /></span>}
          starColor = 'rgb(3, 81, 125)'
          emptyStarColor = 'rgb(203, 211, 227)'
        />

        {/* <StarRatings
          rating={props.rating}
          starDimension = '25px'
          starSpacing = '0px'
          starRatedColor= 'rgb(3, 81, 125)'
          numberOfStars={5}
          name='star-rating'
        /> */}
        
        <p className = 'text-rating'>{props.rating} Average</p>
    </div>
    )
}
export default Rating;