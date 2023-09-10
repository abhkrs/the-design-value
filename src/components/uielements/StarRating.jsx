import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function StarRating({ rating }) {
  const stars = [];
  let remainingRating = rating;

  for (let i = 1; i <= 5; i++) {
    if (remainingRating >= 1) {
      stars.push(<FaStar key={i} className="mx-1 mt-1 text-gold" />);
      remainingRating -= 1;
    } else if (remainingRating >= 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="mx-1 mt-1 text-gold" />);
      remainingRating = 0; // To prevent displaying more stars
    } else {
      stars.push(<FaRegStar key={i} className="mx-1 mt-1 text-gold" />);
    }
  }

  return <div className="flex items-center">{stars}</div>;
}

export default StarRating;
