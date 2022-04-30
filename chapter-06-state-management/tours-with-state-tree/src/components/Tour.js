import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

export default function Tour({
    title,
    id,
    sights,
    price,
    rating,
    onRemove = f => f
}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <h3>Sights to visit:</h3>
            <ul>
                {
                    sights.map((sight) =>
                    <li key={id}>{sight}</li>)
                }
            </ul>
            <p><b>Price: ${price}</b></p>
            <StarRating totalStars={5} rating={rating} />
        </section>
    )
}