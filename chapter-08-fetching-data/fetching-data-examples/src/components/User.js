import React, {useEffect} from "react";

export default function User({ name }) {
    const logUser = () => {
        fetch(`https://api.github.com/users/${name}`)
            .then(response => response.json())
            .then(console.log)
            .catch(console.error);
    }

    useEffect(logUser, []);
    return <p>User Component</p>;
}