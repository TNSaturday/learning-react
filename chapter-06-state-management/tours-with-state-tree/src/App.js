import React, {useState} from "react";
import toursData from "./data/tours.json";
import ToursList from "./components/ToursList";
import AddTourForm from "./components/AddTourForm";
import { v4 } from "uuid";

function App() {
    const [tours, setTours] = useState(toursData);

    const onRemoveTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    const onRateTour = ((id, rating) => {
        const newTours = tours.map(tour =>
            tour.id === id ? {...tour, rating} : tour
        );
        setTours(newTours);
    })

    const onNewTour = (tour => {
        const id = v4();
        const newTours = [...tours, {...tour, id}];
        setTours(newTours);
    });

    return (
        <main>
            <ToursList
                tours={tours}
                onRemoveTour={id => onRemoveTour(id)}
                onRateTour={(id, rating) => onRateTour(id, rating)}
            />
            <br/>
            <AddTourForm
                onNewTour={tour => onNewTour(tour)}
            />
        </main>
    );
}

export default App;
