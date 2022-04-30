import React, { useRef } from "react";

export default function AddTourForm({ onNewTour = f => f}) {
    const tourTitle = useRef();
    const tourSights = useRef();
    const tourPrice = useRef();

    const submit = e => {
        e.preventDefault();
        const tour = {
            title: tourTitle.current.value,
            sights: tourSights.current.value.split(','),
            price: tourPrice.current.value,
        };
        onNewTour(tour);
        tourTitle.current.value = "";
        tourSights.current.value = "";
        tourPrice.current.value = "";
    };

    return (
        <form onSubmit={submit}>
            <input ref={tourTitle} type="text" placeholder="Tour Title" required/>
            <input ref={tourSights} type="text" placeholder="Sights to Visit" required/>
            <input ref={tourPrice} type="text" placeholder="Tour Price" required/>
            <button>Add</button>
        </form>
    );
}