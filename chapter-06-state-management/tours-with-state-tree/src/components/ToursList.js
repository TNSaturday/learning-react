import React from "react";
import Tour from "./Tour";

export default function ToursList({
    tours,
    onRemoveTour = f => f,
    onRateTour = f => f
}) {
    return (
        <div>
            <h1>Tours</h1>
            {
                tours.map((tour, i) =>
                <Tour
                    key={i} {...tour}
                    onRemove={onRemoveTour}
                    onRate={onRateTour}
                />)
            }
        </div>
    )
}