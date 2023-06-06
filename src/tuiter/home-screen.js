import React from "react";
import WhatsHappening from "./whats-happening";
import TuitsList from "./tuits/tuits-list";

function HomeScreen() {
    return (
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
}

export default HomeScreen;