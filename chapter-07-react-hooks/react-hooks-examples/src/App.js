import React, {useCallback, useState} from "react";
import "./style.css";
import ToursList from "./components/ToursList";
import {PureCat} from "./components/Cat";

export default function App() {
    const [cats, setCats] = useState(["Pusha", "Chiba", "Zhenya"]);
    const addCat = () => setCats([...cats, prompt("Name a cat")]);
    const meow = useCallback(name => console.log(`${name} has meowed!`), []);

    return (
        <main>
            {
                cats.map((cat, i) => <PureCat key={i} name={cat} meow={meow} />)
            }
            <button onClick={addCat}>Add a cat</button>
            <ToursList />
        </main>
    );
}