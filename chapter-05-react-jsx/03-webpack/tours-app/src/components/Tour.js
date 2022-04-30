import React from "react";

import Header from "./Header";
import Sights from "./Sights";
import Price from "./Price";
import StarRating from "./StarRating";

export default function Tour ({ destination, sights, price, rating }) {
    return (
        <>
            <Header destination={destination} />
            <Sights sights={sights}/>
            <Price price={price}/>
            <StarRating totalStars={5} rating={rating} />
        </>
    )
}