import React, {useEffect, useState} from "react";
import User from "./components/User";
import UserForm from "./components/UserForm";
import BigUserList from "./components/BigUserList";

function App() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [userName, setUserName] = useState("TNSaturday");

    const getUser = (user) => {
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(user => setUser(user))
            .catch(error => setError(error));
    }

    const submitForm = (e) => {
        e.preventDefault();
        getUser(userName);
    }

    useEffect(() => {console.log(user)}, [user]);

    return (
        <main>
            <h1>Show Github User!</h1>
            <UserForm userName={userName} setUserName={setUserName} submitForm={submitForm} />
            <User user={user} error={error}/>
            <BigUserList />
        </main>
    );
}

export default App;
