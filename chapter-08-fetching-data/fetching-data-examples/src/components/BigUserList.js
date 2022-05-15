import React from "react";
import faker from "@faker-js/faker";

export default function BigUserList() {
    const bigList = [...Array(5000)].map(() => ({
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar()
    }));

    console.log(bigList[0]);
}