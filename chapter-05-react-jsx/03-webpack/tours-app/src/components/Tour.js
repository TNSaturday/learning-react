import React from "react";
import Header from "./Header";
import Sights from "./Sights";
import Price from "./Price";

export default function Tour ({ destination, sights, price }) {
    return (
        <>
            <Header destination={destination} />
            <Sights sights={sights}/>
            <Price price={price}/>
        </>
    )
}