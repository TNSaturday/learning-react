import React from "react";
import Tour from "./Tour";
import { useTours } from "../providers/TourProvider";

export default function ToursList() {
    const { tours } = useTours();

    return (
        <div>
            <h1>Tours</h1>
            {
                tours.map(tour =>
                <Tour
                    key={tour.id}
                    {...tour}
                />)
            }
        </div>
    )
}