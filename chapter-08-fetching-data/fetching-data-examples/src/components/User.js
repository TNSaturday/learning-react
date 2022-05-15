import React from "react";

export default function User({ user, error }) {
    return user
        ? error
            ? <p>There was an error</p>
            : (
                <div className="githubUser">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        style={{width: 200}}
                    />
                    <div>
                        <h2>{user.login}</h2>
                        {user.name && <p>{user.name}</p>}
                        {user.location && <p>{user.location}</p>}
                    </div>
                </div>
            )
        : (<p>Make a request to show user data</p>);
}