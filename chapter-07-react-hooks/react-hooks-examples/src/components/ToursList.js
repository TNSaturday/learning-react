import React, {useEffect, useState} from "react";

export default function ToursList() {
    const tours = ["Tazy", "Cappadocia", "Roses"];
    const [selectedTour, setSelectedTour] = useState("");
    useEffect(() => {
        console.log(selectedTour);
    }, [selectedTour]);

    return (
        <main>
            <h1>Tours List</h1>
            <ul>
                {
                    tours.map((tour, i) => (
                        <div key={i}>
                            <li onClick={() => {setSelectedTour(tour)}}>{tour}</li>
                            <p
                                className={
                                    tour === selectedTour
                                    ? "selected"
                                    : "unselected"
                                }
                            >Описание тура</p>
                        </div>
                    ))
                }
            </ul>
        </main>
    );
}