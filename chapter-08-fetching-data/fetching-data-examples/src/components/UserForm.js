import React from "react";

export default function UserForm({ submitForm, userName, setUserName }) {
    return (
        <div>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="Enter github username"
                    defaultValue={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button>Get user data</button>
            </form>
        </div>
    );
}