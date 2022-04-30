import React, {useState} from "react";
import toursData from "./data/tours.json";
import ToursList from "./components/ToursList";

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

  return (
    <ToursList
        tours={tours}
        onRemoveTour={id => onRemoveTour(id)}
        onRateTour={(id, rating) => onRateTour(id, rating)}
    />
  );
}

export default App;
