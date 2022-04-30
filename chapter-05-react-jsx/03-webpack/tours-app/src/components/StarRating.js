import React, { useState }from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
)

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5, rating = 3 }) {
    const [selectedStars, setSelectedStars] = useState(rating);
    return createArray(totalStars).map((n, i) =>
        <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
        />);
}