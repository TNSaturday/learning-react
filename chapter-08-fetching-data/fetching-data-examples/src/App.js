import React from "react";
import User from "./components/User";

function App() {
    const userName = "TNSaturday";
    return (
        <main>
            <h1>Fetching Data!</h1>
            <User name={userName} />
        </main>
    );
}

export default App;
