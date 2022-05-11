import React from "react";
import ToursList from "./components/ToursList";
import AddTourForm from "./components/AddTourForm";

export default function App() {
    return (
        <main>
            <ToursList />
            <br/>
            <AddTourForm />
        </main>
    );
}
