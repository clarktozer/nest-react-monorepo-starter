import axios from "axios";
import React from "react";

export const App = () => {
    axios.get("/api").then(console.log);

    return <div className="App"></div>;
};
