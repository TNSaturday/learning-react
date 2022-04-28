import React from "react";

export default function Sights ({ sights }) {
    return (
        <>
            <h3>Sights to visit:</h3>
            <ul>
                {sights.map((sight, i) => (
                    <li key={i}>{sight}</li>
                ))}
            </ul>
        </>
    )
}