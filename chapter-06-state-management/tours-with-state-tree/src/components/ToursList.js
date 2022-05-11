import React, { useContext } from "react";
import Tour from "./Tour";
import { TourContext } from "../index";

export default function ToursList({ onRemoveTour = f => f, onRateTour = f => f }) {
    const tours = useContext(TourContext);
    return (
        <div>
            <h1>Tours</h1>
            {
                tours.map(tour =>
                <Tour
                    key={tour.id}
                    {...tour}
                    onRemove={onRemoveTour}
                    onRate={onRateTour}
                />)
            }
        </div>
    )
}