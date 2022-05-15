import React, {memo} from "react";

function Cat({name, meow = f => f}) {
    console.log(`Rendering ${name}`);
    return <p onClick={() => meow(name)}>{name}</p>
}

export const PureCat = memo(Cat);