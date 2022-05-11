import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useTours } from "../providers/TourProvider";

export default function Tour({ title, id, sights, price, rating }) {
    const { rateTour, removeTour } = useTours();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeTour(id)}>
                <FaTrash />
            </button>
            <h3>Sights to visit:</h3>
            <ul>
                {
                    sights.map((sight, i) =>
                    <li key={i}>{sight}</li>)
                }
            </ul>
            <p><b>Price: ${price}</b></p>
            <StarRating
                totalStars={5}
                rating={rating}
                onRate={rating => rateTour(id, rating)} />
        </section>
    )
}