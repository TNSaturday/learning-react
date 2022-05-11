import React from "react";
import { useInput } from "../hooks/useInput";

export default function AddTourForm({ onNewTour = f => f}) {
    const [titleProps, resetTitle] = useInput("");
    const [sightsProps, resetSights] = useInput("");
    const [priceProps, resetPrice] = useInput("");

    const submit = e => {
        e.preventDefault();
        const tour = {
            title: titleProps.value,
            sights: sightsProps.value.split(','),
            price: priceProps.value,
        };
        onNewTour(tour);
        resetTitle();
        resetSights();
        resetPrice();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="Tour Title"
                required
            />
            <input
                {...sightsProps}
                type="text"
                placeholder="Sights to Visit"
                required
            />
            <input
                {...priceProps}
                type="text"
                placeholder="Tour Price"
                required
            />
            <button>Add Tour</button>
        </form>
    );
}