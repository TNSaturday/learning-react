import React, { createContext, useState, useContext } from "react";
import toursData from "../data/tours.json";
import { v4 } from "uuid";

const TourContext = createContext(undefined);

export const useTours = () => useContext(TourContext);

export default function TourProvider({ children }) {
    const [tours, setTours] = useState(toursData);

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    const rateTour = ((id, rating) => {
        const newTours = tours.map(tour =>
            tour.id === id ? {...tour, rating} : tour
        );
        setTours(newTours);
    })

    const addTour = (tour => {
        const id = v4();
        const newTours = [...tours, {...tour, id}];
        setTours(newTours);
    });

    return (
        <TourContext.Provider value={{ tours, addTour, rateTour, removeTour }}>
            {children}
        </TourContext.Provider>
    )
}