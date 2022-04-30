import React, {useState} from "react";
import toursData from "./data/tours.json";
import ToursList from "./components/ToursList";

function App() {
  const [tours, setTours] = useState(toursData);
  const onRemoveTour = (id) => {
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
  }

  return (
    <ToursList
        tours={tours}
        onRemoveTour={id => onRemoveTour(id)}
    />
  );
}

export default App;
