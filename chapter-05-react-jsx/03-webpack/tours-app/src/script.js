import React from "react";
import { render } from "react-dom";
import data from "../data/tours.json";

import Tour from "./components/Tour";

const container = document.getElementById("root");

function ToursList ({tours}) {
    return tours.map((tour, i) => <Tour key={i} {...tour}/>);
}


render(<ToursList tours={data} />, container);