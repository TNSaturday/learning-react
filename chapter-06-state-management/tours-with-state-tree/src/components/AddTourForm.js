import React, { useState } from "react";

export default function AddTourForm({ onNewTour = f => f}) {
    const [title, setTitle] = useState("");
    const [sights, setSights] = useState("");
    const [price, setPrice] = useState(0);

    const submit = e => {
        e.preventDefault();
        const tour = {
            title,
            sights: sights.split(','),
            price
        };
        onNewTour(tour);
        setTitle("");
        setSights("")
        setPrice(0);
    };

    return (
        <form onSubmit={submit}>
            <input
                value={title}
                onChange={event => setTitle(event.target.value)}
                type="text"
                placeholder="Tour Title"
                required
            />
            <input
                value={sights}
                onChange={event => setSights(event.target.value)}
                type="text"
                placeholder="Sights to Visit"
                required
            />
            <input
                value={price}
                onChange={event => setPrice(event.target.value)}
                type="text"
                placeholder="Tour Price"
                required
            />
            <button>Add Tour</button>
        </form>
    );
}